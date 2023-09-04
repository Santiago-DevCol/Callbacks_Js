alert('valida la consola');
const tiempo = [120, 200, 150,300]

const validarHoras = (tiempo,callback)=>{
    if (typeof callback == 'function') {
        
        return callback(tiempo)
    }else{
        return "El callback no es una función válida";
    }
}

function mayorados (value){
    return value > 120
}

const mayorDosHoras = (param) => {
    
    const result = param.filter(mayorados)
    return result
}

alert( validarHoras(tiempo,mayorDosHoras) + ' Son las horas filtradas')

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
});