const fs = require("node:fs");
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta=10 ) => {
    //   return new Promise((resolve, reject) => {
    //     console.log("=================");
    //     console.log("Tabla del", base);
    //     console.log("=================");
    //     let salida = "";

    //     for (let i = 1; i <= 10; i++) {
    //       salida += `${base} x ${i} = ${base * i}\n`;
    //     }

    //     console.log(salida);

    //     /* fs.writeFile( `table-${base}.txt`, salida, (err) => {
    //           if(err) throw err;
    //           console.log(`tabla-${base}.txt guardado exitosamente`);
    //       }) */

    //     fs.writeFileSync(`tabla-${base}.txt`, salida);

    //     console.log(`tabla-${base}.txt creado exitosamente`);
    //   });

    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${ 'x'.green } ${colors.cyan(i)} ${ '='.green } ${colors.brightRed(base * i)}\n`;
        }

        if (listar) {
            console.log( "========================".green);
            console.log(     "Tabla del".yellow, colors.blue(base) );
            console.log( "========================".green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado exitosamente`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo,
};
