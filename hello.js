const EventEmitter = require('events');
const celebrity = new EventEmitter();

//subscribe to celebrity of observer 1

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('congratulations! You are the best!');
    }
});

//subscribe to celebrity of observer 2
celebrity.on('race win', (result) => {
    if (result === 'win') {
        console.log('Boo I could have tried better than this');
    }
});

process.on('exit', (code) => {
    console.log('process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');

