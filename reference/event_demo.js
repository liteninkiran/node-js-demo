
    const EventEmitter = require('events');

    // Create class
    class MyEmitter extends EventEmitter{}

    // Initialise object
    const myEmitter = new MyEmitter();

    // Event listener
    myEmitter.on('event', () => console.log('Event fired'));

    // Initialise event
    myEmitter.emit('event');




