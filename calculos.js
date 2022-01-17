const fs = require('fs');
const crearArchivo = (factor = 8) => {
    return new Promise((resolve, reject) => {
        let resultado = '';

        for (let i = 1; i <= 10; i++) {
            //\n para salto de linea
            resultado += `${factor} x ${i} = ${factor * i}\n`;
        }
        fs.writeFile(`tabla-del-${factor}.txt`, resultado, (err) => {
            if (err) throw err;
        })
        resolve(`tabla-del-${factor}.txt`);
    })

}

module.exports = {
    crearArchivo,
}