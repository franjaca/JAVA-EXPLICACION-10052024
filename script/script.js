/**
 
Tipos de Variables


JavaSript no obliga a definir que tipo de variable estas trabajando

 */


nombre = "Maria Rojas"; //tipo de variable String, puedes utilizar "" o ''
edad = 25; //tipo Number, no necesita comillas
espaniol = true; // tipo Boolean, solo dos estados (true o false);
sexo = null;

//¿Como puedes ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores ->console.log( lo que quieres mostrar)


console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);

//operador de concatenación + une dos o mas expresiones de salida

console.log("nombre->" + typeof (nombre) + "!");
console.log("edad->" + typeof (edad));
console.log("español->" + typeof (espaniol));
console.log("sexo->" + typeof (sexo));


direccion = "Calle Campo 81";

//simplificar las cadenas con Backticks
console.log(`Datos Personales ${nombre} Dirección ${direccion}`);
console.log("Datos Personales ->Nombre: " + nombre + ", Dirección " + direccion);

//Si la variable numérica, podemos realizar operaciones matematicas

console.log("El año que viene cumpliras " + (edad + 1) + " años");
console.log(`El año que viene cumpliras ${edad + 1} años`);


console.log('Esta es una frase de Cervanes \'En un lugar de la Mancha\'');
console.log("Esta es una frase de Cervanes \"En un lugar de la Mancha\"");
console.log("Esta es una frase de Cervanes 'En un lugar de la Mancha' "); //Se recomienda esta
console.log("Esta es una frase de Cervanes \n'En un lugar de la Mancha' "); //Salto de línea
console.log("Esta es una frase de Cervanes \n\t'En un lugar de la Mancha' "); //salto de línea y sangría

console.log("El signo de la eternidad Armenia es \u{058D}");
console.log("El signo de Bitcoin es \u{20BF}");

//Actividad Propuesta 2.4 // pagina 36

console.log('El acceso a la ruta C:\\\\usuario\\ tarda 1\'23", algo considerado "lento" en la actualidad.');

console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\", algo considerado \"lento\" en la actualidad.");




/*Tipos de datos Numericos (number)*/

altura = 1.80; //tipo de dato numero es decimal
diametro = 2e-9;
console.log(`Altura->${altura}`);
console.log(`Diametro->${diametro}`);
resultado = altura / 0; //->Infinito
otroResultado = resultado + 10;
console.log(otroResultado);


//Si tienes otro tipo de datos y quieres hacer una operación matemática-> NaN-> Not a Number

resultado = nombre * 25;
console.log(resultado);//* / %** pero con el + siempre concatena

resultado = nombre + " " + edad;
resultado = `${nombre} ${edad}`;
console.log(resultado);



//Tipo de datos Booleanos (true o false)

//true ->1 false->0

valorVerdadero = true;
valorFalso = false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3-1:${Boolean(1)}`);
console.log(`4-0:${Boolean(0)}`);

//si existe datos...siempre va a ser true!

texto = "Un texto ejemplo";
console.log(`5- texto:${Boolean(texto)}`);
textoVacio = "";
console.log(`5- textoVacio: ${Boolean(textoVacio)}`);


//Conversion de tipos//

masAnios = "10"; //tipo de dato es string o cadena...

console.log(edad + masAnios); //2510
console.log(edad + Number(masAnios));//35  -> casting conversacion manual ssolo con la suma
console.log(String(edad) + masAnios); //2510

console.log(true * 7);
console.log(9 - false);
console.log(9 - true);
console.log(edad * masAnios); //conversion automatica
console.log(edad / masAnios); //conversion automatica
console.log(edad - masAnios); //conversion automatica
console.log(undefined / edad); //NaN
console.log(null * edad); //0
console.log(edad ** masAnios); // exponencial (25 a la 10)


/-----------------------------------------------------/



parrafo = document.getElementById("parrafo");
//parrafo = document.querySelectorAll("p"); //Arrays
parrafo.innerHTML = "Es una prueba de javascript en el DOCM"

//lectura del socumento...resultaria vacia

parrafo.innerHTML = "";


cuadrado = document.querySelector(".cuadrado");//clase
//cuadrado = document.querySelector("#cuadrado");//id -> Solo el primero cuando existan varios
//cuadrado = document.querySelector("p");//Etiqueta


//parrafo=document.querySelector("#parrafo");
titulo = document.querySelector("h1");




titulo.innerHTML = "Práctica de JavaScript";
cuadrado.innerHTML = "A";


document.write("Es una prueba de document.write"); // fuerza al primer espacio libre



//variables - 2 tipos de variables

var edad = 58;


let email = "j@gmail.com";
document.write("<p>" + email + "</p>");
document.write("<p>" + edad + "</p>"); //cuidado con el var!




/*let*/
/* Ambito de bloque*/


document.write("<br>***********************************");
let mensaje1 = "Mensaje 1"; // declaramos mensaje 
function mostrarMensaje2() { //funcion -> actua como un bloque
    let mensaje1 = "<br>Mensaje dentro del Bloque";
    document.write(mensaje1);
}
mostrarMensaje2();
document.write("<br>mensaje fuera->" + mensaje1);




//***********Constantes ***********/

const IVA = 21;
let precio = 50 * ((IVA / 100) + 1);

document.write("<br>El precio final es " + precio);


// salidas por consola

console.error("aqui hay un error");
console.info("Es una informacion");
console.warn("Es una notificacion importante");


















//(Salidas de mensaje)Practicas vine bien()

//le tienes que dar al boton de aceptar para salir de la alerta)


// alert("Es una alerta");
// document.write("prueba...prueba...prueba!!!");




// //mensajes de confirmación (si/no...true/false)

// let confirmacion = confirm("Quieres salir del programa")

// document.write(`<br>El usuario quiere salir?->${confirmacion}`); if (confirmacion) {//instruccion de condicion

//     window.location.replace("https://google.es")
// } else {

//     alert("te quedas aqui!")
// }



// //mensaje de entrada de datos

nombre = prompt("Esribe tu nombre");
document.write(`<br>El nuevo nombre es->${nombre}`);


//--actividad propuesta 2.5, pagina 50----

let confirmacion = confirm("Quieres salir del programa");
document.write(`<br>El usuario quiere salir?->${confirmacion}`);
if (confirmacion) {
    window.location.replace("https://google.es")
} else { alert("finalmente se queda en la web") }

console.log('%c FIN DEL PROGRAMA', 'font-weight: bold; color:blue; text-decoration:underline');

//Operadores
//1.Asignación

let a = 5
let b = a;
console.log("El valor de b es" + b);




//forma simplificada
a = a + b // o de forma simplificada
//a=5+5
console.log("valor del primer a->" + a);//resultado es 10

a += b;// el valor de a se le suma otra vez su valor + el valor de b
//10+5
console.log("El valor del segundo a ->" + a)
let c = a % b; //modulo=0, porque a=15 b=5 15/5=3 resto 0
console.log("El valor de c es ->" + c);


let d = b ** 4;
console.log("El valor de d es ->" + d);


//Operadores de comparación -> solo dan como resultado true o false
//Igual

let respuesta = a == b;//false
console.log(respuesta);

//distinto
respuesta = a != b; //true
console.log(respuesta);


// Explicacion de la igualdad estricta
let e = "5";//string
respuesta = b == e; // da true porque los dos valen 5 
console.log(respuesta);


//en el caso de igualdad estricta reslta falso porque b es numero y e es string
respuesta = b === e;
console.log(respuesta);


//desigualdad estricta
respuesta = b !== e; // b no es igual que e en valor o en tipo
console.log(respuesta); //true


//Mayor  | Menor | Mayor o igual | Menos o igual


respuesta = a > b;//true
respuesta = c < b; //true
respuesta = b >= e //compara sus valores!
console.log(respuesta);

++a;// a vale 16 -> a=a+1
console.log("Ahora a vale ->" + a);
a--;
console.log("Ahora a vale ->" + a);
a -= 3;
console.log("Ahora a vale ->" + a);



// pagina 50

console.log("Operaciones con AND");
console.log(`1.=>${true && true}`);
console.log(`3.=>${true && false}`);
console.log(`4.=>${false && true}`);
console.log(`5.=>${false && false}`);

//evaluamos condiciones

console.log(`6. => ${4 > 5 && 3 > 5}`);
console.log(`7. => ${4 <= 5 && 3 <= 5}`);




console.log("Operaciones con OR");

console.log(`1.=>${true || true}`);
console.log(`3.=>${true || false}`);
console.log(`4.=>${false || true}`);
console.log(`5.=>${false || false}`);

console.log("Operaciones con NOT");
console.log(`1.=> ${!true}`);
console.log(`2.=> ${!false}`);


//Ejemplo practico

let edadNueva = 18;
let matriculado = true;
resultado = matriculado && edadNueva;
console.log(resultado);//true


//Operador ternario

resultado = a > b ? "A es mayor que B" : "B es mayor que A"
console.log(resultado);


//ejercicio: solicita por promt la edad e indica por un alert si es mayor de edad o menor de edad

//edadNUeva=prompt("Indica tu Edad");
//resultado=EdadNueva>=18?"Eres Mayor de Edad":"Eres menor de edad";
//alert(resultado);
edadNueva >= 18 ? edadNueva++ : edadNueva--;
console.log(edadNueva);




///Estructura condicional if - else


console.log("*********************");
console.log("Inicio");
let local = 2;
let visitante = 1;
if (Local === visitante) {

    console.log("Hay empate");
    console.log();

}
else {

    console.log("No hay empate");
}
console.log("Fin");

//estructura condicionales con if  else if

if (local === visitante) {

    console.log("Hay empate");

} else if (local > visitante) {
    console.log("Gana euipo local");

} else {

    console.log("Gana euipo visitante");
}






























