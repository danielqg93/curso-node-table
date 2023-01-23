const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
     .then( archivo => console.log(`${archivo} creada`.green))
     .catch( err => console.log(err.red));
