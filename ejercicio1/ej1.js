alert('valida la consola');

// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

const printConsole = (message, callback) => {
    if (typeof callback === 'function') {
        callback(message)
    }else{
        console.log(`El callback ${callback} que se pasa no es una funcion valida.`);
    }
}

printConsole('301 Advertencia archivo movido permanentemente', console.warn)

document.addEventListener('DOMContentLoaded', function () {
    const botonCopiar = document.getElementById('boton-copiar');
    const botonCopiar1 = document.getElementById('boton-copiar1');
    const botonCopiar2 = document.getElementById('boton-copiar2');
    const textoACopiar = document.getElementById('texto-a-copiar');
    const textoACopiar1 = document.getElementById('texto-a-copiar1');
    const textoACopiar2 = document.getElementById('texto-a-copiar2');

    botonCopiar.addEventListener('click', function () {
    const texto = textoACopiar.value;

    navigator.clipboard.writeText(texto)
        .then(() => {
            console.info('Texto copiado al portapapeles con éxito');
        })
        .catch(err => {
            console.error('Error al copiar el texto al portapapeles: ', err);
        });
    });

    botonCopiar1.addEventListener('click', function () {
        const texto = textoACopiar1.value;
    
        navigator.clipboard.writeText(texto)
            .then(() => {
                console.info('Texto copiado al portapapeles con éxito');
            })
            .catch(err => {
                console.error('Error al copiar el texto al portapapeles: ', err);
            });
        });

        botonCopiar2.addEventListener('click', function () {
            const texto = textoACopiar2.value;
        
            navigator.clipboard.writeText(texto)
                .then(() => {
                    console.info('Texto copiado al portapapeles con éxito');
                })
                .catch(err => {
                    console.error('Error al copiar el texto al portapapeles: ', err);
                });
            });
  });
  