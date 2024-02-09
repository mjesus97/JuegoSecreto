function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario===numeroSecreto){
        //Acerto
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos===1)? 'vez':'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        // no acerto
        limpiarCaja()
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
            intentos ++;
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
            intentos ++;
        }
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros')
        return;
    }
    if (listNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listNumerosSorteados.push(numeroGenerado);
        console.log(listNumerosSorteados)
        return numeroGenerado;
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}
function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    return;

}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero secreto');
    asignarTextoElemento('p',`Indica el numero del 1 al ${numeroMaximo}`);

    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;

}
let listNumerosSorteados = []
let numeroMaximo = 10
let numeroSecreto = 0;
let intentos = 0;
condicionesIniciales()
