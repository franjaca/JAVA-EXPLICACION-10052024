
/* Mostrar la tabla de multiplicar*/

// let x=1;
// let y=1;
// while(x<10){

//     while(y<10){
//         console.log(x+"x"+y+"="+(x*y));
//         y++;
//     }
//     x++;//se incrementa x
//     y=1;// se inicializa y para que en la proxima vuelta comienza en 1
// }







/*BUCLE FOR* de multiplicar con bluce for mas sencillo/
// console.log("***Bucle FOR***");
// for(let x=1;x<10;x++){//1

//     for(let y=1;y<10;y++){//1-2-3-4---------9
//         console.log(x+"x"+y+"="+(x*y));
//     }
// }




/****************/

/***ACTIVIDAD 2.12 */

//Multiplos de 7 desde el 1 al 100/

// for(let i=0;i<=100;i+=7){

//     console.log("Multiplos de 7->" +i);
// }


/**Actividad 2024 2014, mostrar de forma decreciente, y mostrar el año de nacimiento del 1 al 31 y el mes del 1 al 12 */

// for (let i=2024;i>=2014;i--) {

//     console.log(i);
// }

// for (let y=1; y<=12;y++) {

//     console.log(y);
// }


// for (let x=1; x<=31;x++) {

//     console.log(x);
// }


// let dias = document.querySelector("#dias");
// let meses = document.querySelector("#meses");
// let anios = document.querySelector("#anios");

// for (let dia = 1; dia <= 31; dia++) {
//     /*Crear un elemento en el html.--DOM */

//     opcion = document.createElement("option");
//     opcion.textContent = dia;//lo que se muestra
//     opcion.value = dia; //lo que se muestra en el valor dle document
//     dias.appendChild(opcion);



// }




// for (let mes = 1; mes <= 12; mes++) {
//     opcion = document.createElement("option");
//     opcion.textContent = mes;//lo que se muestra
//     opcion.value = mes; //lo que se muestra en el valor dle document
//     opcion.classList.add("desplegable","lista");  //clase cc
    
//     //opcion.classList.remove-> quitar una clase
//     opcion.setAttribute("id",mes);//agregar atributo
//     meses.appendChild(opcion);//crear elemento 



// }





// for (let anio = 2024; anio >= 2014; anio--) {
//     opcion = document.createElement("option");
//     opcion.textContent = anio;//lo que se muestra
//     opcion.value = anio; //lo que se muestra en el valor dle document
//     anios.appendChild(opcion);

// }


//salto e interruptor es bucles
//break
//muestra la tabla de multiplicar del 9 hasta que llega el 5 y rompe(break)

const TABLA=9;
for (let index = 0; index <=10 ; index++) {
    console.log(`${TABLA} x ${index}= ${TABLA*index}`);
    if(index==5){

        break;//interrumpe o rompe el bucle

    }
    
}

//salto
//muestra los 10 primeros impares que no sean multiplos de 3
let contadorS=0;
let numeroS=1;
while(contadorS<=10){
if(numeroS%3==0){
    numeroS++;
continue;//no ejecuta las siguientes lineas sino que vuelve al while

}
if(numeroS%2!=0){

    console.log("Es impar" + numeroS);
  
    contadorS++;
}
numeroS++;//se incrementa si no hace salto
}


