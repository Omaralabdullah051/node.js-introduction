//events is used to handle events.

const EventEmitter = require('events');//here events returns a class

const emitter = new EventEmitter();//here we create a emitter object .We can raise events by emitter.

// register a listener for bellRing event
emitter.on('bellRing', () => {
    console.log('We need to run!');
})

// raise an event (make sure that registered a listener for this event)
emitter.emit('bellRing');

//if we just register a listener event but don't raise the event, the event doesn't fire.
//if we raise an event at first and then register a listerner for that, the event doesn't fire.


//we can pass multiple parameters in emit method.
const emitter2 = new EventEmitter();

emitter2.on('bellRing', (period) => {
    console.log(`We need to run because ${period}`);
})

//here we raise the event 2 seconds later
setTimeout(() => {
    emitter2.emit('bellRing', 'second period ended');
}, 2000);



//we can pass multiple parameters as an object in emit method.
const emitter3 = new EventEmitter();

emitter3.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
})

setTimeout(() => {
    emitter3.emit('bellRing', {
        period: 'first',
        text: 'period ended'
    });
}, 2000);

