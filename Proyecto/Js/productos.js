

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listaDeProductos = document.querySelector('.listaDeProductos');
const url = 'https://fakestoreapi.com/products';

// Obtener los datos de la API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Generar el contenido HTML para mostrar los productos
    const productosHTML = data.map(producto => {
      return `
        <div class="productoApi">
          <img class="imagenApi" src="${producto.image}" alt="${producto.tittle}">
          <h4>${producto.title}</h4>
          <p>Precio: ${producto.price} $</p>
          <button id="${producto.id}" class="botonAgregarCarrito">Agregar al Carrito</button>
        </div>
      `;
    }).join('');

    // Agregar los productos en el contenedor
    listaDeProductos.innerHTML = productosHTML;

    const botonAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');

    botonAgregarCarrito.forEach(boton => {
      boton.addEventListener('click', function() {
        const idProducto = parseInt(this.id);
        const producto = data.find(producto => producto.id === idProducto);

        if (carrito.some(item => item.id === idProducto)) {
          const index = carrito.findIndex(item => item.id === idProducto);
          carrito[index].cantidad++;
        } else {
          producto.cantidad = 1;
          carrito.push(producto);
        }

        Toastify({
          text: `Agregaste ${producto.title} al Carrito!`,
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

        actualizarNumerito();
        localStorage.setItem("carrito", JSON.stringify(carrito));
      });
    });

    const numerito = document.querySelector("#numerito");

    function actualizarNumerito() {
      let nuevoNumero = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
      numerito.innerText = nuevoNumero;
    }

    actualizarNumerito();
  })
  .catch(error => {
    console.log('Error al obtener los productos:', error);
  });

const buscar = document.querySelector("#buscar");
const iconoLupa = document.querySelector(".bi.bi-search");

buscar.addEventListener("input", () => {
  const terminoBusqueda = buscar.value.toLowerCase();
  filtrarProductos(terminoBusqueda);
});

function filtrarProductos(termino) {
  const elementosProductos = document.querySelectorAll(".productoApi");
  const noEncontrado = document.querySelector("#noEncontrado");
  const tituloDestacados = document.querySelector(".tituloDestacados");
  let productosEncontrados = 0;

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
    noEncontrado.style.display = "block";
    tituloDestacados.style.display = "none";
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


