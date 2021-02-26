// import log from "./logger.js";
const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const Events = require('events');
const emitter = new Events();


function HelloWorld (name){
    console.log(`Hello ! I am ${name}`);
}
HelloWorld('Houria');
console.log(logger);
logger.log('ceci est un log');

console.log(path.parse('./loggertest.txt'));

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log('Total memory is ' + totalMemory);
console.log('Free memory is ' + freeMemory);

const files = fs.readdirSync('./');
console.log(files);

fs.mkdir('./nvodossier',(err)=>{
    if(err) throw err;
});


// si tu as recu une requete GET alors :
emitter.emit('emitted');

// si tu recois un signal emitted, alors affiche que tu l'as reçu

emitter.on('emitted', function() {
    console.log('receveid event!')
})
