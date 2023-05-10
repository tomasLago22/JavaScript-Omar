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
     