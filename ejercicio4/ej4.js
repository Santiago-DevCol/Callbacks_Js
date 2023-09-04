alert('valida la consola')

const cadena = (cadena,callback) =>{
    if (typeof callback == 'function') {
        return callback(cadena)
    }else{
        return "El callback no es una función válida";
    }
}

const mayuscula = (cadena)=>{
    return cadena.toUpperCase()
}
const minuscula = (cadena)=>{
    return cadena.toLowerCase()
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