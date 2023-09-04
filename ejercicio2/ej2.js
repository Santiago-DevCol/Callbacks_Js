alert('valida la consola');

// 2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

const typeofCallback = (message, callback) => {
    callback(`EL tipo de dato de ${message} es ${typeof(message)}`)
}


const printAlert = (data)=>{
    alert(data);
}

document.addEventListener('DOMContentLoaded', function () {
    const botonCopiar = document.getElementById('boton-copiar');
    const textoACopiar = document.getElementById('texto-a-copiar');
    
    const botonCopiar1 = document.getElementById('boton-copiar1');
    const textoACopiar1 = document.getElementById('texto-a-copiar1');
    

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

  });