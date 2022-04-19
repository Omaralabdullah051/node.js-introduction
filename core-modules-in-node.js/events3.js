// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// const startPeriod = () => {
//     console.log('Class Started');

//raise event when bell rings
//     setTimeout(() => {
//         emitter.emit('bellRing', {
//             period: 'first',
//             text: 'period ended'
//         });
//     }, 2000);
// }

// module.exports = startPeriod;


//here the problem is : we create a emitter instance in this file and raise the event. but In events2.js file where we are importing this raise event function, we also create a new emitter instance. This emitter is not same as the emitter of events2.js file. That is why the event doesn't fire.


//solution: 
const EventEmitter = require('events');
//here we don't create another emitter instance. we just create a class and extends EventEmitter.
class StartPeriod2 extends EventEmitter {
    startPeriod = () => {
        console.log('Class Started');

        //raise event when bell rings
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended'
            });
        }, 2000);
    }
}

module.exports = StartPeriod2;