document.addEventListener("DOMContentLoaded", function() {



//Get item
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoContenedor = document.querySelector("#carritoContenedor")

const productos = [
  { id: 1, nombre: "Remera St Marie Prisoner", precio: 10000 },
  { id: 2, nombre: "Pantalon Waffle", precio: 15000 },
  { id: 3, nombre: "Camisa XXL", precio: 12000 },
  { id: 4, nombre: "Swater Polera Animal Print", precio: 11000 },
  { id: 5, nombre: "Remera Thunder", precio: 9000 }
];

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto6 = new Producto(6, "Campera Oversize Matelasse St Marie", 17000);
productos.push(producto6);

// Creando estilos en DOM
const divProducto = document.querySelector(".contenedorProductos");

const productosHTML = productos.map(producto => {
  return `
    <div class="producto">
      <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>
      <button id="agregar${producto.id}" class="botonAgregarCarrito">Agregar al Carrito</button> 
    </div>`;
});

divProducto.innerHTML = productosHTML.join("");

const botonAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');

botonAgregarCarrito.forEach(boton => {
  boton.addEventListener('click', function() {
    const idProducto = parseInt(this.id.replace('agregar', ''));
    const producto = productos.find(item => item.id === idProducto);

    if (producto) {
      carrito.push(producto);
      Toastify({
        text: `Agregaste ${producto.nombre} al Carrito!`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        avatar: "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1686186351~exp=1686186951~hmac=558bf283326ec3388f4efa85674f5895c493073817746060a181d1d953d44631",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function() {} // Callback after click
      }).showToast();
      actualizarCarrito();
      guardarLocal();
    }
  });
});

const buscar = document.querySelector("#buscar");

buscar.addEventListener("input", () => {
  const terminoBusqueda = buscar.value.toLowerCase();
  filtrarProductos(terminoBusqueda);
});

function filtrarProductos(termino) {
  const elementosProductos = document.querySelectorAll(".producto");

  elementosProductos.forEach(elemento => {
    const nombreProducto = elemento.querySelector("h4").textContent.toLowerCase();

    if (nombreProducto.includes(termino)) {
      elemento.classList.remove('no-mostrar');
    } else {
      elemento.classList.add('no-mostrar');
 
    }
  });
}

function actualizarCarrito() {
  let totalCompra = carrito.reduce((accum, prod) => {
    return accum + prod.precio;
  }, 0);
  
  console.log(`El Valor Total de su Carrito es de ${totalCompra}`)

/*   carrito.forEach((producto)=>{
    const div = document.createElement("div")
    div.className = ("pruductosCarrito")
    div.innerHTML `
    
    <h4>${producto.nombre}</h4>
      <p>${producto.precio}</p>
      <p> Cantidad: <span id= "cantidad"> ${producto.cantidad}</span> </p>
      <button onclick = "eliminarDelCarrito(${producto.id})" class = "botonEliminar"><i class="fas fa-trash-alt"</button>
    `
    carritoContenedor.appendChild(div)

  }) */


}

//Set item
const guardarLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};



});