const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
     try {
          let salida = '';
          for (let i = 1; i <= hasta; i++) {
               salida += `${base} ${'x'} ${i} = ${base*i}\n`;
          }
          if (listar) {
               console.log('============'.bgBlue);
               console.log(`TABLA DEL ${base}`.bgMagenta);
               console.log('============'.bgBlue);
               console.log(salida.rainbow)
          }

          fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

          return `Tabla-${base}`;
          
     } catch (err) {
          throw err;
     }
}

module.exports = {
     crearArchivo
}