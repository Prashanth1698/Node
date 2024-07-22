// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('Messagelogged', (arg) => {
//     console.log('Listener Called', arg);
// });

// logger.log('message');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('Messagelogged', (arg) => {
    console.log('Listener Called', arg);
});

logger.log('message');
