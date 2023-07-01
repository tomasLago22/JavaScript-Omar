
const carrito = JSON.parse(localStorage.getItem("carrito")) 

const carritoVacio = document.querySelector("#carritoVacio")
const carritoProductos = document.querySelector(".carritoProductos")
const valorTotal = document.querySelector(".valorTotal")
let botonEliminar = document.querySelectorAll(".botonEliminarProducto")
const listaDeProductos = document.querySelector(".listaDeProductos")

function cargarProductosCarrito (){
    if (carrito && carrito.length > 0){

        carritoProductos.innerHTML = "";
    

        carritoVacio.classList.add("no-mostrar")
        carritoProductos.classList.remove("no-mostrar")
        

        carrito.forEach(producto => {
            let div = document.createElement("div")
            div.classList.add("carritoProducto")
            div.innerHTML = `
            <img class="productoImagenCarrito" src="${producto.img || producto.image}" alt="${producto.nombre || producto.title}">
            <div class="carritoNombre">
                
                <h3>${producto.nombre || producto.title}</h3>
            </div>
            <div class="carritoCantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carritoPrecio">
                <small>Precio</small>
                <p>$${producto.precio || producto.price}</p>
            </div>
            <div class="carritoSubtotal">
                <small> Total </small>
                <p>$${producto.precio * producto.cantidad || producto.price * producto.cantidad}</p>
            </div>
            <button class = "botonEliminarProducto" id="${producto.id}"> <i class= "bi bi-trash-fill"></i> Eliminar </button>
            `
            carritoProductos.append(div)
        
            let total = carrito.reduce((accum, producto)=> accum + (producto.precio * producto.cantidad || producto.price * producto.cantidad), 0)
            valorTotal.innerText = `Total :$${parseInt(total)}`
        });
        actualizarBotonEliminar()
        
        }else{
            carritoProductos.innerHTML = "";
            carritoVacio.classList.remove("no-mostrar");
            carritoProductos.classList.add("no-mostrar");
            valorTotal.innerText = `Carrito Vacio`
            
            
        }

}

cargarProductosCarrito()




function actualizarBotonEliminar (){
    botonEliminar = document.querySelectorAll(".botonEliminarProducto")

    botonEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    })
}



   
function eliminarDelCarrito(e) {
    const idBotonEliminar = e.currentTarget.getAttribute("id");
    carrito.splice(
      carrito.findIndex((producto) => producto.id.toString() === idBotonEliminar.toString()),
      1
    );
    
    cargarProductosCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  

  






const vaciarCarrito = document.querySelector(".vaciarCarrito")
 
   vaciarCarrito.addEventListener("click", function(){
    carrito.length = 0
    localStorage.removeItem("carrito")
    console.log("CarritoLimpiado")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
    
    cargarProductosCarrito()

  })



























































