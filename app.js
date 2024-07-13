
let numerosecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo=10;

mensajesiniciales();

function limpiar(){
    let valorcaja = document.querySelector ('#valorusuario').value='';

}

function asignartextoelemento(elemento,texto){

    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function generarnumero() {

  
    let numerogenerado= Math.floor (Math.random()*numeromaximo)+1;
    console.log(numerogenerado);
    console.log(listanumerossorteados);
    
    if(listanumerossorteados.length == numeromaximo){

        asignartextoelemento.apply('p','ya se sortearon todos los numeros');
    
    } else{
      if  (listanumerossorteados.includes(numerogenerado)) {
        return generarnumero();
      }else {
        listanumerossorteados.push(numerogenerado);
        return numerogenerado;

    }


}
}

//function reiniciarjuego(){
   // let btnreiniciar = document.getElementById('reiniciar');
    //btnreiniciar.removeAttribute('disabled') ;
    //btnreiniciar.disabled= false;

//}

function reiniciarjuego(){
    //limpiar cajas de textos
    limpiar();
    //indicar mensajes de intervalo de numeros
    mensajesiniciales();
    // generar numero random
     
     //iniciar numeros de intentos
    
    //deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function mensajesiniciales(){
    asignartextoelemento('h1','Juego del numero secreto');
    asignartextoelemento('p','Indica un numero del 1 al 10');
    numerosecreto = generarnumero();
    intentos =1;
}

function verificarintento(){

    console.log(intentos);
    //console.log(numerosecreto);
   let numerodeusuario= parseInt(document.getElementById('valorusuario').value);
   document.getElementById('reiniciar').removeAttribute('disabled');
  
   if (numerodeusuario==numerosecreto){
    asignartextoelemento ('p', `acertaste el numero secreto en ${intentos} ${(intentos===1 )?'vez' : 'veces'}`);
   
    

   }else{
     if(numerodeusuario>numerosecreto) {
        asignartextoelemento ('p', 'es menor');
     }else{
        asignartextoelemento ('p', 'es mayor');

     }
     intentos++;
      limpiar();
    
   
   return;
}
}


