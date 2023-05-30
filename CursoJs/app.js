

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


function CrearObjetoCuenta (nombre, apellido,saldo){

this.nombreCuenta = nombre = prompt("Ingrese el nombre de la cuenta")
this.apellidoCuenta = apellido = prompt("Ingrese el apellido para la cuenta")
this.saldoCuenta = saldo = Number(prompt("Ingrese el saldo de la cuenta"))
//METODO
this.mostrarCuenta = function (){
 return `Nombre : ${this.nombreCuenta},Apellido : ${this.apellidoCuenta}, Saldo: ${this.saldoCuenta}`

}
}

const cuenta1 = new CrearObjetoCuenta ()
console.log(cuenta1.mostrarCuenta)


//ARRAY

// Un array es un tipo de dato que sirve para almacenar valores en forma de lista 

// Los elementos del array tienen un indice que va desde el 0 

const productos = [22, "Tomas", true , null]

// Indico que en consola me muestre el indice 0, es decir el 22.
console.log(productos[0])

// Remplazar el valor de un elemento 
// array[3] = 50

// Para recorrer mi array puedo utilizar un For

 for(let index = 0; index <= 3; index++){
     console.log(array[index])
 }


 // Conocer cuantos elementos tiene mi array
console.log(productos.length)

// Agregar un valor al array
// Por ejemplo para tener una funcion de "Agregar al carrito"

productos.push("Otro elemento")

console.log(productos)

/*
tu carrito es un [] (array vacio)
al presionar el boton de "Agregar al carrito"
vas a ejecutar, carrito.push()

*/

// Asi iniciara mi carrito
const carrito = []

// Al presionar el boton 
carrito.push("Mi producto")

//quiero agregar otro producto
carrito.push("Otro producto")
carrito.push("Tercer producto")

// Si yo quiero agregar mi producto al comienzo del array
carrito.unshift("PRIMER producto")

//Si quiero eliminar el ultimo elemento de un array
carrito.pop()
//Si quiero eliminar el primero
carrito.shift


console.log(carrito)

//Cuando es un ARRAY el nombre va en plurar
//                  0         1       2        3
const alumnos = ["Pablo", "Samuel", "Max", "Franco"]


//Eliminar elementos de un array en cualquier posicion

// En este caso va a eliminar desde el indice 1. 2 elementos
nombres.splice(1,2)
console.log(alumnos)

//Une los elementos de un array con el signo que nosotros indiquemos
console.log(alumnos.join(","))


const alumnas = ["Karina", "Agustina"]

//Se juntaran ambos arrays
const totalAlumnos = alumnos.concat(alumnas)

console.log(totalAlumnos)

// Devolver una copia de una parte del array
// Recibe dos parametros, Inicio y Final

const otroArray = totalAlumnos.slice(1,3)
// En este caso quedaran solo samuel y max, ya que corta una parte y se queda con ella

// Para mostrar en que indice del array se encuentran
console.log(alumnos.indexOf("Samuel"))

//para saber si un elemento esta incluido en mi array, me devolvera un boleano

console.log(alumnos.includes("gustavo"))

alumnos.reverse()

//invierte el orden de los elementos
console.log(alumnos)


//EJEMPLOS

// Cargar datos y almacenarlos en un array

const listaNombres = []
let cantidad = 5

do{

    let entrada = prompt("Ingrese nombre")
    listaNombres.push(entrada.toUpperCase)
    console.log(listaNombres.length)

}while(listaNombres.length != cantidad);

const nuevaLista = listaNombres.concat(["Ana", "Ema"])

console.log(listaNombres)

const objeto1 = {
    id: 1,
    producto: "gaseosa"

}
//agregue otro objeto a mi array
const array= [objeto1,{id: 2, producto : "papas"}]
//agrego otro con el push
array.push({id:3, producto: "Doritos"})


//ARRAY DE OBJETOS
const products = [
{id:1 , product: "Producto 1"},
{id:2 , product: "Producto 2"},
{id:3 , product: "Producto 3"},
]

//FOR OF de Objetos

for( const product of products){
    console.log(product.id)
    console.log(product.product)
    
}


//FUNCIONES DE ORDEN SUPERIOR.

/* Abstraccion --> Resumir un grupo complejo de instrucciones, bajo un apalabra clava 
 (funcion) que sugiere cual es el problema a resolver por la misma */



const pendientes = ["DOM", "Eventos", "Librerias"]

//for each ()

pendientes.forEach((p, i) =>{
    console.log(`${i}: ${p}`)
})

console.log(pendientes)

//MAP

//A diferencia del for each crea un array nuevo

//Se utiliza esto cuando yo quiero mostrar o enumerar elementos en la pantalla 
pendientes.map((p,i)=>{
    console.log(`${i} ${p}`)

})

const carrito22 = [
    {nombre: "Producto A", precio: 1000},
    {nombre: "Producto B", precio: 1500},
    {nombre: "Producto C", precio: 2000}
]

//Reduce 

//el reduce nos permite sumar
//Por ej para ver el total de mi compra
let totalCompra = carrito22.reduce((accum, prod)=>{
    return accum + prod.precio
}, 0)

console.log(totalCompra)


//Filter

//En este caso filtraremos los precios q sean mayores a 1000
let resultado22 = carrito22.filter ((producto22)=> producto22.precio>1000)

//En este caso le indicamos que traiga todos los productos que sean distintos a producto b
// let resultado22 = carrito22.filter ((producto22)=> producto22.nombre != "Producto B")


// En este caso traemos los productos que tengan como nombre "Producto B"
// let resultado22 = carrito22.filter ((producto22)=> producto22.nombre == "Producto B")



//Similar al filter, existe el FIND

//El find a diferencia del filter, traera el primero que encuentre con la caracteristica que nosotros pasamos
//El filter traera todos con la caracteritica que pasamos
const filtrado = carrito22.find((p)=>p.nombre === "Producto B")

console.log(filtrado)

//MATH 

//Muestra el valor de PI
console.log(Math.PI)
//Se utiliza pra distintas operaciones matemticas, en este caso muestra el maximo
//Ej podemos utilizarlo para ver quien hizo el maximo puntaje en un juego
console.log(Math.max(25,3,6,7,8,89))

//Para redondear

let pi = Math.pi
console.lof(pi)

//redondeamos hacia arriba

console.log(Math.ceil(pi))

//Rendondeamos hacia abajo
console.log(Math.floor(pi))


//DATE
//Para poder manipular fechas

console.log(new Date())

const hoy = new Date ()

console.log(hoy.getFullYear())
console.log(hoy.getMonth())






// DOM

//Javascript puede leer el Html

let elemento = document

elemento = document.body
elemtmo = document.scripts

/* 

clases
id
tags 

*/

//METODO TRADICIONAL

//Para yo poder acceder a un elemento de html, lo primero que hay que hace es capturar el elemento

//De esta manera capturamos a todos los elementos que contengan esta clase 
const navbar = document.getElementsByClassName("navbar")

const contenedor = document.getElementsByClassName("container")

const encabezados = document.getElementsByTagName("h2") 

//Capturar por ID
const identificador = document.getElementById("id")

console.log(navbar)

//Metodo moderno

//LLAMAR POR CLASE
const navegacion = document.querySelector(".navbar")

console.log(navegacion)

//LLAMAR POR ETIQUETA

const titulos= document.querySelector("h2")


//PARA QUE CAPTURE A TODOS LOS H2
//Utilizo el All
const titulo2 = document.querySelectorAll("h2")

//CAPTURAR POR ID
const idForm = document.querySelector("#id")


//PARA MODIFICAR UN ELEMENTO 

// 1) Capturar el elemento 

//                                               Modifico el texto
const modificando = document.querySelector("h2").textContent= "Mi Lista de productos"



// Eliminar elemento del Dom

const elementoAEliminar = document.querySelector("h5")
elementoAEliminar.remove()

console.log(elementoAEliminar)

//AGREGAR ELEMENTOS AL DOM

const agregarElemento = document.createElement("div")
 
agregarElemento.innerHTML = "<h4> parrafo agregado </h4>"

//Le agregamos un hijo, marcandole que agregue lo que hicimos en agregar elemento
document.body.appendChild(agregarElemento)

const listaVacia = document.querySelector(".lista-vacia")

const otrosCursos = [
    "DesarrolloWeb",
    "JavaScript",
    "Angular",
    "NodeJs"
]


//Para injectar la informacion de "otrosCursos" en lista-vacia

//recorremos, armo un curso por cada uno de los elementos del array
for(let curso of otrosCursos){
    //creo un elemento que es una lista
    let listado = document.createElement("li")
    //le injecto al listado lo que traiga curso
    listado.innerHTML = curso
    //agarro a lista vacia y le agrego el listado
    listaVacia.appendChild(listado)
}

const cursosCoder = [
    {id:1 ,titulo:"DesarrolloWeb" , precio: 1000},
    {id:2 ,titulo: "JavaScript", precio:3000},
    {id:3 ,titulo: "ReactJs", precio:5000}
    


]

for (h of cursosCoder){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=
    `
    <h3> Curso : ${h.titulo} </h3>
    <p> Precio : ${h.precio} </p>

    
    `;

    document.appendChild(contenedor)
}



//EVENTOS


// 1) CAPTURAR EL ELEMENTO  ---- BOTON

// 2) ASIGNAR UN EVENTO     ---- CLICK

// 3) EJECUTAR UNA FUNCION  ---- FUNCTION VALIDAR(){}


// EXISTEN DIFERENTES TIPOS DE EVENTOS.

// MOUSE, TECLADO, CHANGE, INPUT, SUBMIT, OTROS

// EJEMPLO

// Capturo
const navegacion22 = document.querySelector(".navbar") 

// Llamar  a la variable

// Asigno el escuchador , el evento, y la funcion
navegacion22.addEventListener("click", ()=>{
    console.log("Le diste al click")
})

/* navegacion22.addEventListener("dblckick", ()=>{
    console.log("Le diste doble click") 
    
})
    */


// Eventos del teclado

const inputName = document.querySelector("#inputName")

inputName.addEventListener("keydown",()=>{
    console.log("Escribiendo...")
})

inputName.addEventListener("blur",()=>{
    console.log("Validando informacion")
})

inputName.addEventListener("keydown",()=>{
    console.log("Escribiendo...")
})

// mostrara en el input, lo que nosotros escribamos
inputName.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

// hago lo mismo pero cuando no escriba nada se ejecutra el if
inputName.addEventListener("input", (e)=>{
if(e.target.value === ""){
    console.log("fallo la validacion")
}

})

inputName.addEventListener("submit",(e)=>{
    // Para prevenir que el evento se ejecute por defecto
    e.preventDefault()
    console.log("Buscando...")
})

//creando funciones 
const formulario = document.querySelector("#formulario")
const inputaName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")


formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault()
    console.log(`Nombre del usuario ${inputName.value}`)
}