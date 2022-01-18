const { crearArchivo } = require('./calculos');
const argv = require("process")
const factor = process.argv
    // se valida si el valor ingresado NO es numerico
if (isNaN(factor[2])) {
    console.log('El valor ingresado no es un numero');
    process.exit(1)
}
// se parsea el valor ingresado
let numero1 = parseInt(factor[2])
crearArchivo(numero1)
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));