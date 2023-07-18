

const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde quiere la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe de ser de tipo numerico'
        }
        return true
    })
    .argv

module.exports = argv;