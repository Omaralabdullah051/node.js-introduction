// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// const startPeriod = require('./events3');

// emitter.on('bellRing', ({ period, text }) => {
//     console.log(`We need to run because ${period} ${text}`);
// })

// startPeriod();

//here the problem is : we create a emitter instance in this file and register a listener for a event which is included in events3.js file. but In events3.js file where we are exporting this raise event function, we also create a new emitter instance. This emitter is not same as the emitter of events3.js file. That is why the event doesn't fire.


//solution: 
const EventEmitter = require('events');

const StartPeriod2 = require('./events3');

const startPeriod3 = new StartPeriod2();


startPeriod3.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
})

startPeriod3.startPeriod();