const { crearArchivo } = require('./calculos');
const argv = require("process")
const factor = process.argv

if (isNaN(factor[2])) {
    console.log('El valor ingresado no es un numero');
    process.exit(1)
}

crearArchivo(factor[2])
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));