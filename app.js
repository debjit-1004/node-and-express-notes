const EvenntEmitter = require('events');


const customEmitter = new EventEmitter();
customEmitter.on('response', () => {
    console.log('data er')
})