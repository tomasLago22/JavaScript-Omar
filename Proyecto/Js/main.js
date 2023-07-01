

document.addEventListener("DOMContentLoaded", function() {
  
const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 




  const productos = [
    { id: 1, nombre: "Remera St Marie Prisoner", precio: 10000, img: "../img/RemeraPrissoner.jpg" },
    { id: 2, nombre: "Pantalon Waffle", precio: 15000, img: "../img/pantalonWaffle.jpg" },
    { id: 3, nombre: "Camisa XXL", precio: 12000, img: "../img/Camisa XXL.jpg" },
    { id: 4, nombre: "Swater Polera Animal Print", precio: 11000, img: "../img/SweaterAnimalPrint.jpg" },
    { id: 5, nombre: "Remera Thunder", precio: 9000, img: "../img/RemeraThunder.jpg" }
  ];

  class Producto {
    constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
    }
  }

  const producto6 = new Producto(6, "Campera Oversize Matelasse St Marie", 17000, "../img/CamperaOversize.jpg");
  productos.push(producto6);

  let divProducto = document.querySelector(".contenedorProductos");

  const productosHTML = productos.map(producto => {
  return `
    <div class="producto">
      <img class="productoImagen" src="${producto.img}" alt="#">
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio}</p>
      <button id="${producto.id}" class="botonAgregarCarrito">Agregar al Carrito</button>
    </div>`;
  });

  divProducto.innerHTML = productosHTML.join("");




  const botonAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');

  botonAgregarCarrito.forEach(boton => {
  boton.addEventListener('click', function() {
    const idProducto = parseInt(this.id);
    const producto = productos.find(producto => producto.id === idProducto);
    
    if(carrito.some(item => item.id === idProducto)){
      const index = carrito.findIndex(producto => producto.id === idProducto)
      carrito[index].cantidad++
    }else {
      producto.cantidad = 1;
     
      carrito.push(producto);
      
                                                  

      
    }

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
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
      },
      onClick: function() {} // Callback after click
    }).showToast();
    
    
    actualizarNumerito()  
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
   
  
  });

 


  const numerito = document.querySelector("#numerito")

  function actualizarNumerito (){
    let nuevoNumero = carrito.reduce((acc, producto) =>acc + producto.cantidad,0)
    numerito.innerText = nuevoNumero
  }


  actualizarNumerito()



  const buscar = document.querySelector("#buscar");
  const iconoLupa = document.querySelector(".bi.bi-search");

  buscar.addEventListener("input", () => {
    const terminoBusqueda = buscar.value.toLowerCase();
    filtrarProductos(terminoBusqueda);
  });

  function filtrarProductos(termino) {
    const elementosProductos = document.querySelectorAll(".producto");
    const noEncontrado = document.querySelector("#noEncontrado");
    const tituloDestacados = document.querySelector(".tituloDestacados")
  
    let productosEncontrados = 0
  
    elementosProductos.forEach(elemento => {
      const nombreProducto = elemento.querySelector("h4").textContent.toLowerCase();
     
      
      if (nombreProducto.includes(termino)) {
        elemento.classList.remove('no-mostrar');
        productosEncontrados++;
       
      } else {
        elemento.classList.add('no-mostrar');
        
      }
    });
    if (productosEncontrados === 0) {
      noEncontrado.style.display = "block" ;
      tituloDestacados.style.display = "none";
      console.log(tituloDestacados)
    } else {
      noEncontrado.style.display = 'none';
      tituloDestacados.style.display = 'block';
    }
  
   }

    buscar.addEventListener("input", function() {
    if (buscar.value !== "") {
      iconoLupa.classList.add("no-mostrar");
    } else {
      iconoLupa.classList.remove("no-mostrar");
    }
    });


  

  });



});


