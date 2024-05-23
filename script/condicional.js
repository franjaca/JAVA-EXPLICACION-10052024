/*Entrada a un pun-> mayor de 18 años */
/*let edad =Number(prompt("Edad"));  //canversion manual de tipo de dato, porque en principio es string
//verificar que edad sea tipo de dato numerico
console.log(typeof(edad)); //si es string tengo que pasar a numerico
//si tiene mas de 18 años, entonces entrar = true
let entrada=false; //se inicializa falso para que nadie entre si no cumple la condicion de ser mayor de 18 años
if(edad>=18){
    entrada=true;
}
console.log("Puede entrar al pub?" + entrada);

/*******************************/

/* Ejemplo de if anidados, donde se declara un animal, y luego se va entrando en diferentes if, hasta llegar al último else... y veremos que pasa*/

// let mascota= "gato";
// if(mascota=="perro"){
//     console.log("La mascota es perro");
// }else if (mascota=="tortuga"){
//     console.log("La mascota es tortuga");
// }else if (mascota=="canario"){
//     console.log("La mascota es un canario");
// }else{

//     console.log(mascota);
// }

// /* Nota: en el ejemplo anterior no se cumple ninguna de las condiciones, y va directo al else final.*/


// /*Si Ana tiene dinero y el articulo esta en venta, podra irse de compras sino, se queda en casa*/

// let dinero=prompt("¿Tienes dinero");//todo lo que escribas lo para a mayuscula -> string.topperCase
// let enVenta=prompt("¿Esta en venta?");



// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI"){
// console.log("Ana se puede ir de compras");

// } else {
//     console.log("Ana se queda en casa!");
// }


/*Estructura switch case pagina 62*/

// console.log("Menu Iniciado");
// let letra = prompt("Indica tus opciones:[c]opiar [a]brir [p]egar");
// switch (letra) {
//     case "a": case"A":
//         console.log("Se abre archivo");
//         break;

//     case "c": case"C": console.log("se copia el archivo");

//          break;
//     case "p": case"P": console.log("Se pega el archivo");

//          break;
//     default: console.log("Opción no válida");

// }

let horario = "";
let botones=document.querySelectorAll(".boton");//toma todos los elementos que tiene la clase boton y crea un array
botones.forEach(elemento=>{
    elemento.addEventListener("click",function() {
        switch (elemento.value){


    case "L":
        horario="Lunes de 07:00 a 14:00";
        break;

    case "M":
        horario="Martes de 08:00 a 15:00";
        break;

    case "X":
        horario="Miercoles de 06:00 a 13:00";
        break;

    case "J":
        horario="Jueves de 05:00 a 12:00";
        break;

    case "V":
        horario="Viernes de 04:00 a 01:00";
        break;

    case "S":
        horario="Sabado de 16:00 a 22:00";
        break;

    case "D":
        horario="Domingo de 15:00 a 18:00";
        break;
        }

document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;

})
})












