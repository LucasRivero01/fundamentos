const { crearArchivo } = require('./calculos');

const factor = 7;

crearArchivo(factor)
    .then(nombreArchivo => console.log(nombreArchivo, 'generado'))
    .catch(err => console.log(err));