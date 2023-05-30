let registrarEmail = prompt("Ingrese su Email")

let registrarContrasenia = prompt("Ingrese su contraseña")

let confirmarContrasenia = prompt("Ingrese nuevamente su contraseña")


while (registrarContrasenia.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres. Inténtelo nuevamente.");
    registrarContrasenia = prompt("Ingrese su contraseña:");
}

while (registrarContrasenia !== confirmarContrasenia){
    alert("Sus contraseñas no coinciden, intentelo de nuevo mas tarde.")
    confirmarContrasenia = prompt("Confirme nuevamente su contraseña")
}

alert("Registro Exitoso!")

 let valor = Number(prompt("Ingrese el valor de su producto"));

let cuotas = prompt("Seleccione en cuantas cuotas pagara el producto").toLowerCase();

let interes = calcularInteres(cuotas,valor)

let mensajeInteres = "Debido al interes aplicado el valor de tu producto es de $" + (valor + interes) 

switch(cuotas){
    case "tres":
    case "3":
    alert("Realizaras la compra en tres cuotas de $"+ valor /3)
    break

    case "seis":
    case "6":
        alert("Realizaras la compra en seis cuotas de $"+ valor /6)
    break

    case "doce":
    case "12":
        alert("Realizaras la compra en doce cuotas de $"+ (valor + interes) /12)
        alert(mensajeInteres)
    break
    default: 
    alert("La cantidad de cuotas ingresada no es valida")
    break
    
}

 function calcularInteres (cuotas, valor){
     if (cuotas == "doce" || cuotas == "12"){
         return valor * 0.2 
     }
 }




let nombreProducto = prompt("Ingrese el nombre de su producto")
let productosAComprar = parseInt(prompt("Ingrese numero de productos a comprar"))
let precioProducto = parseInt(prompt("Ingrese el precio del producto que quiere comprar"))

console.log("Dia de decuentos")
for(let i=0; i<=productosAComprar ; i++){
    let resultadoDto = precioProducto *0.20
    let descuento = precioProducto - resultadoDto
    alert(`obtuviste un descuento del 20% en ${nombreProducto} tu dinero a abonar es de ${descuento}`)

}
      

const carrito = []

class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const producto1 = new Producto(1, "Remera St Marie Prisoner", 10000);
  const producto6 = new Producto(6, "Campera Oversize Matelasse St Marie", 17000);

  const productos = [
    { id: 2, nombre: "Pantalon Waffle", precio: 15000 },
    { id: 3, nombre: "Camisa XXL", precio: 12000 },
    { id: 4, nombre: "Swater Polera Animal Print", precio: 11000 },
    { id: 5, nombre: "Remera Thunder", precio: 9000 }
  ];
  

  
  const botonAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');

  botonAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', function() {
      const idProducto = parseInt(this.id.replace('agregar', ''));
  
    const producto = productos.find(item => item.id === idProducto);
    carrito.push(producto)
      
    });
  });
  

  /* 
    const agregarUno = document.querySelector("#agregarUno");
    
    agregarUno.addEventListener('click', function(){
      carrito.push(producto1);
  }); */
  

  let totalCompra = carrito.reduce((accum, prod) => {
     return accum + prod.precio;
    }, 0);
  
  console.log(totalCompra);