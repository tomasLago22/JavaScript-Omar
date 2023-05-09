console.log("Bienvenidos a Js")

//VARIABLES- Es como una cajita, en donde yo voy a poder incertar informacion 

//Mi caja      //Su contenido
let comision = "CoderHouse"; //Tipo de dato string, un string es una cadena de texto

let edad = 27; //Tipo de dato numbre, almacena numeros.

let disponible = false ;// Tipo de dato buleano,true o false.

disponible =89; //Estaria cambiando el contenido de mi Variable

//Muestro en consola el contenido de mi caja.
console.log(edad);

//De esta manera al ser una cosntante, el contenido no cambiara
// const nombre = "Favio"


//DIFERENCIAS CONST Y LET

/*
---------------LET
1) Puedo declarar una variable vacia .
2) Puedo reasignar Valores.
let nombre;

nombre = "Harvey"
nombre = true

---------------CONST
1) No puedo declarar una constante vacia
2) No Puedo reasignar Valores


*/

//CONCATENACION

const nombreAlumno = "Nelson "
const apellidoAlumno = "Gomez"


const nombreCompleto = nombreAlumno + " " + apellidoAlumno

console.log(nombreCompleto)


// prompt("Ingrese su nombre");

alert("ALERTA")

let nombreAlumno02 = prompt("Ingrese el nombre del alumno");

alert("Nombre del alumno " + nombreAlumno02)

//OPERADORES ARITMETICOS

/*

+SUMA
-RESTA
/DIVISON
*MULTIPLICACION

*/

let primerNumero = parseInt(prompt("Ingrese un numero")); 
let segundoNumero = Number(prompt("Ingrese otro numero"));

let suma = primerNumero + segundoNumero;
let resta = primerNumero - segundoNumero;
let multiplicacion = primerNumero * segundoNumero;
let division = primerNumero / segundoNumero;

alert(division);

let nombreUsuario = prompt("Ingrese su nombre")
alert("Bienvenido "+ nombreUsuario)



//CONTROL DE FLUJOS


//if(condicion){
    //bloque de codigo que se ejecuta si es verdadero
//}


let edad2 = 20;

//si edad es mayor a 18, soy mayo de edad
//si no, soy menor de edad 

if(edad >= 18){
    console.log("Soy Mayor de edad")
}else{
    console.log("soy menor de edad")
}

/*
if(condicion){
    bloque verdadero
}else{
    bloque falso
}

//OPERADORES LOGICOS

/* 

> mayor que
< menor que
== igual
> mayor o iguaL
> menor o igual

*/

/*if(condicion){
    si la la condicion1 es verdadera
}else if(condicion2){
    si la condicion 2 es verdadera
}else{
    si las condiciones anteriores son falsas
}
*/

let calificacion= 85

if(calificacion>= 90){
    console.log("la mejor calificacion")
}else if(calificacion>= 80){
    console.log("Buena calificacion")
}else if(calificacion >= 70){
    console.log("zafaste")
}else{
    console.log("NO PASASTE EL EXAMEN")
}

let puntos = 2000

if(puntos>= 1800){
    console.log("usuario premiun")
}else if(puntos>=1500){
    console.log("usuario regular")
}else if(puntos >=1400){
    console.log("Ya casi alcanzas el usuario regular")
}else{
    console.log("NO SOS USUARIO DE ESTA PAGINA")
}

let contrasena = "12345"

let ingresarcontra = prompt("Ingrese su contra")

if(ingresarcontra == contrasena){
    console.log("Felicidades, ingresaste")
}else{
    console.log("Acceso denegado")
}

let numero = "9"

if (numero == 9){
    console.log("El numero es 9")
}//SOLAMENTE VALIDA EL VALOR, A PESAR DE QUE UNO SEA UN STRING Y EL OTRO UN NUMBER

let numero2 = "9"

if(numero === 9){
    console.log("Es un numero")
}else{
    console.log("es distinto tipo de dato")
}

/*

= asignacion
== comparacion valor
=== estrictamente igual, valida dato y tipo de dato

*/


/*

OR => || 

AND => &&

*/

let valor1 = false
let valor2 = false

if(valor1 || valor2){
console.log("al menos uno de los valores es verdadero")

}else{
    console.log("Ningun valor es verdadero")
}

let num1 = 5
let num2 = 11

if (num1 > 10 || num2 > 10){
    console.log("Almenos uno de los valores es mayor a 10")
}else{
    console.log("ninguno de los valores es mayor a 10")
}

let valores1 =true
let valores2 = false 

if(valores1 && valores2){
    console.log("Ambos valores son verdaderos")
}else{
 console.log("almenos uno es falso")}

 //deben cumplirse ambas condiciones

 let rolUsuario = "admin"
 let nivelAcceso = 4

 if(rolUsuario === "admin" && nivelAcceso >= 3){
    console.log("acceso permitido")
 }else{
    console.log("acceso denegado")
 }





let comida = prompt("Que queres comer?")

//SWHITCH

//Recibe entre parentesis el nombre de nuestra variable

/* `` Cuando yo tenga que remplazar el valor que hay dentro de mi variable
tengo que usar `` y ${} siempre y cuando tenga muchos valores
*/

switch(comida){
    case "hamburguesa":    
        console.log(`pedido${comida},valor $1000`)
    break 
    case "pizza":
        console.log(`pedido${comida},valor $800`)
    break
    case "Lomo":
        console.log(`pedido${comida},valor $500`)
    break
    default:
        console.log("Ninguna opcion anterior")
    break
}

let peliculas = prompt(`
1: Renfield
2: Evil dead rise
3: El exorcista del Papa
4: Batman
`)

switch (peliculas) {
    case "1":
        console.log("Renfield")
        
        break;
        case "2":
        console.log("Evil dead rise")
        
        break;
        case "3":
        console.log("El excorcista del Papa")
        
        break;
        case "4":
        console.log("Batman")
        
        break;

    default:
        console.log("No elegiste ninguna de las opciones")
        break;
}


//CICLOS 

//BUCLES EN JAVASCRIPT

/* 


FOR [CICLOS POR CONTEO]

WHILE  [CICLOS CONDICIONALES]
DO WHILE [CICLOS CONDICIONALES]

*/

/*
//mientras, se de una condicion ejecuto
while(condicion){
    //cuerpo del bucle
}

*/

let i = 0

while(i <= 5){
    alert(i)
    i++
}

let entrada = prompt("Ingrese texto o ESC para interrumpir")

let texto = ""

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese texto o ESC para interrumpir")
}

alert(texto)

//EL CICLO CONTINUA HASTA QUE EL USUARIO ESCRIBA ESC O esc

//LO QUE HAGO CON (texto += entrada + " ") ES SUMARLE A LA VARIABLE TEXTO LO QUE YO VAYA AGREGANDO EN ENTRADA



// DO WHILE



//hace algo mientras haya una condicion
do{
//cuerpo del bucle
}while(condition)

let y= 0

do {
    console.log(`el valor de Y es: ${y}`)
    y++
} while (y <=10);


//la diferencia entre ambos es que el DO WHILE nos va a dar almenos una vez el resultado

//FOR

//    desde donde        hasta donde   actualizacion
// 1)NOMBRE DE VARIABLE 2)CONDICION 3)OPERADOR
for ( let i=5; i<=10 ;i++ ){
    //Cuerpo del ciclo
    alert(`el valor de I es: ${i}`)
}


let numero3 = Number(prompt("Ingresa un numero"));

for(let i=1;i <=10; i++){
    let resultado = numero3 * i
    console.log(`${numero3} X ${i} = ${resultado}`)
}

for(let i= 1; i <= 10; i++){
if(i === 6){
    break
}
alert(`el valor de I es: ${i}`) //ROMPE EL CICLO
}

//CONTINUE


for( let i= 1; 1<=10; i++){
    if(i===7){
        continue
    }
    console.log(`el valor de i es: ${i}`) //CONTINUA DEJANDO DE LADO EL VALOR INDICADO
    
}

let vidas = Number(prompt("Ingrese su cantidad de vidas"));

for(let i=0; i<=10; i++){
    if(i===5){
    alert(`alcanzaste el maximo de vidas`)
    break
}
}



//FUNCIONES


//declarando la funcion
function mostrarMensaje (){
    alert("Saludos!")
}


//llamo a la funcion
mostrarMensaje ()

function solicitarNombre(){
    let nombre =prompt("Ingrese su nombre")
    console.log(`el nombre del usuario es:${solicitarNombre}`)
}

solicitarNombre()

//Parametros




let numero01 = Number(prompt("Ingrese un numero"))
let numero02 = Number(prompt("Ingrese otro numero"))

//una funcion siempre debe retornar un resultado

function suma01 (numero01, numero02){
    return numero01 +numero02
}

let resultado = suma01(numero01,numero02)

console.log(resultado)

function saludar (nombre,apellido){
    console.log(`saludos ${nombre} ${apellido}`)
}

saludar("Coder", "house")

let primerNumero01 = Number(prompt("Ingrese el primer numero"));
let segundoNumero01 = Number(prompt("Ingrese el primer numero"));
let operacion = prompt("Ingrese la operacion a ejecutar")

function calculadora(primerNumero,segundoNumero,operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero
        break;
        case "-":
            return primerNumero - segundoNumero
        break
        case "*": 
            return primerNumero * segundoNumero
        break
        case "/":
            return primerNumero / segundoNumero
        break
        default: 
            return 0
        break
    }   
}

alert(calculadora(primerNumero01,segundoNumero01,operacion));

//SCOPE => Ambito (Local - Global)


let mensaje = "Mensaje de bienvenida"

//desde dentro de una funcion yo puedo acceder a las variables globales
//en este caso estoy accediendo desde mi funcion Crear mensaje a la variable Global mensaje
function crearMensaje(){
    console.log(mensaje)
}

crearMensaje()

//en este caso estoy accediendo a una variable local, por lo tanto no funcionara
function crearMensaje2(){
    let mensaje2= "Hola a todos"
}

crearMensaje2()


//funciones dentro de funciones

let usuario = prompt("ingrese su nombre")

iniciaApp()

function iniciaApp (){
    console.log("Iniciando Aplicacion...")

    segundaFuncion ()
}

function segundaFuncion(){
    console.log("desde la segunda fucion")

    usuarioAutenticado(usuario)
}

function usuarioAutenticado (usuario){
    console.log("Autenticando usuario...")
    console.log(`Usuario autenticado, bienvenida ${usuario}`)
}

function areaRectangulo (base,altura){
    return base * altura
}

console.log(areaRectangulo(5,6))


//FUNCTION EXPRESSION

const aprendiendoJavascript = function(){
    return "Aprendiendo Javascript"
}

console.log(aprendiendoJavascript())

//FUNCIONES FLECHA



const aprendiendoJs =() => "Aprendiendo JavaScript"

console.log(aprendiendoJs())



const sumando = (a,b) => {return a + b}

console.log(suma(8,9))


const saludo = (nombre) => `saludos ${nombre}`

console.log(saludo("Juan"))



//OBJETOS


// const nombreObj = "monitor de 24 pulgadas"
// const precio = 1000
// const disponibleObj = true

//en vez de hacer esto vamos a llevarlo a un solo objeto

//OBJETO LITERAL

const producto = {
    //propiedades
    //clave : valor
    nombre : "Monitor de 24 pulgadas",
    precio : 1000,
    disponible: true
}

console.log(producto)


//a travez del . accederemos a una propiedad particular
console.log(producto.nombre)
console.log(producto.precio)

//tambien puedo agregar una propiedad a travez del punto

producto.imagen = "image.jpg"

console.log(producto)

//tambien puedo borrar una propiedad

delete producto.disponible

//modificar propiedades

producto.disponible = false

//desestructuracion

const {nombreObj, precio, disponibleObj} = producto


console.log(precio)

//CONSTRUCTOR

function Producto (nombre, precio){
this.nombre = nombre
this.precio = precio
this.disponible = true
}

const producto2 = new Producto ("Teclado", 500)

console.log(producto2)


function Cliente (nombre, edad, domicilio){
    this.nombre =nombre 
    this.edad = edad
    this.domicilio =domicilio 
    this.saludar = function(){
        console.log("Saludos" + "" +this.nombre)
    }
}

const cliente1 = new Cliente ("Flavio", 29, "Eva peron 2032")
const cliente2 = new Cliente ("Tomas", 20, "Mw2375")


function crearObjetoCuenta (nombre, apellido,saldo){

this.nombreCuenta = nombre = prompt("Ingrese el nombre de la cuenta")
this.apellidoCuenta = apellido = prompt("Ingrese el apellido para la cuenta")
this.saldoCuenta = saldo = Number(prompt("Ingrese el saldo de la cuenta"))
//METODO
this.mostrarCuenta = function (){
 return `Nombre : ${this.nombreCuenta},Apellido : ${this.apellidoCuenta}, Saldo: ${this.saldoCuenta}`

}
}

const cuenta1 = new crearObjetoCuenta ()
console.log(cuenta1.mostrarCuenta)