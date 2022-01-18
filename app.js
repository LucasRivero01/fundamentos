const { crearArchivo } = require('./calculos');
const argv = require("process")
const factor = process.argv
    // valido si el valor ingresado es un numero
if (isNaN(factor[2])) {
    console.log('El valor ingresado no es un numero');
    process.exit(1)
}
// igualmente lo parseo
let numero1 = parseInt((factor[2]))
crearArchivo(numero1)
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));