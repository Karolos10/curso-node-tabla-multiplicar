
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
/* const fs = require('node:fs/promises'); */

/* import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer'; */

// const base = 12;
console.clear();

/* console.log(process.argv); */
/* console.log(argv); */

/* console.log('base: yargs', argv.base); */

/* const [ , , arg3 = 'base=1'] = process.argv;
const [ , base = 1] = arg3.split('='); */
// console.log(base);

crearArchivo( argv.b, argv.l, argv.h ).then( nombreArchivo => console.log(nombreArchivo.rainbow))
                    .catch(err => console.log(err))


