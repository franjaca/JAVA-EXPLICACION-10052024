let pases=0;
//Bucle While, evalua la conicion y si es tru entra el bucle, sino finaliza y va  ala siguiente linea
while(pases<10){//booleano(true o false)
console.log("Número de pases ->" + pases);//bucle infinito , poner pases++ para evitarlo
pases++;

}

/* Mostrar la tabla de multiplicar*/

let x=1;
let y=1;
while(x<10){

    while(y<10){
        console.log(x+"x"+y+"="+(x*y));
        y++;
    }
    x++;//se incrementa x
    y=1;// se inicializa y para que en la proxima vuelta comienza en 1
}

/****************** */
/*BUCLE FOR*/
console.log("***Bucle FOR***");
for(let x=1;x<10;y++){

    for(let y=1;y<10;y++){
        console.log(x+"x"+y+"="+(x*y));
    }
}




//Random o aleatorio!
//Array o cadenas de caracteres

// let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//abecedario guarda todas las letras que van con un indice desde el 0=A, hasta las 26=Z

// let numeroAleatorio=parseInt(Math.random()*26);//numero aleatorio
// console.log(abecedario[numeroAleatorio]);
// let letra="";
// while(letra!=abecedario[numeroAleatorio]){

//     letra=prompt("Indica una letra").toUpperCase();


// }
// alert ("Adivinaste... es la letra->" + abecedario[numeroAleatorio]);

/****************** Do While*/

// let contador=0;
// let numero=1;
// while(contador<10){
//     if(numero%2==0){
//         log.console("Es para!");
//         console.log(contador);
//         contador++;


//     }
//     numero++;
// }


//******/

let letra = "";

do{
   letra=prompt("Indica una letra".toUpperCase);

}while (letra != "S");

   

alert("ENHORABUENA");
