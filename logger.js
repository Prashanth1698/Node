const EventEmitter = require('events');


//var url = 'http://mylogger.io/log'
class Logger extends EventEmitter {
    log(message) {
        console.log(message);


        //Raise a event
        this.emit('Messagelogged', { id: 1, url: "https://  " });
    }
}
module.exports = Logger;






// youtube radius of the circle
let PI = 3.14;
function calculateArea(radius) {
    return PI * radius * radius;
}
module.exports = {
    area: calculateArea,
};