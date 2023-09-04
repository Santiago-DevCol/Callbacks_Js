alert('valida la consola')


function operacionMatematica(num1, num2, callback) {
    if (typeof callback === 'function') {
        return callback(num1, num2);
    } else {
        return "El callback no es una función válida";
    }
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No es posible dividir por cero";
    }
}


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
  