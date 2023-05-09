let valor = Number(prompt("Ingrese el valor de su producto"));

let cuotas = prompt("Seleccione en cuantas cuotas pagara el producto").toLowerCase();

let interes = calcularInteres(cuotas,valor)

let mensajeInteres = "Debido al interes aplicado el valor de tu producto es de $" + (valor + interes) 

switch(cuotas){
    case "tres":
    alert("Realizaras la compra en tres cuotas de $"+ valor /3)
    break

    case "seis":
        alert("Realizaras la compra en seis cuotas de $"+ valor /6)
    break

    case "doce":
        alert("Realizaras la compra en doce cuotas de $"+ (valor + interes) /12)
        alert(mensajeInteres)
    break

    default: 
    alert("La cantidad de cuotas ingresada no es valida")
    break
    
}

 function calcularInteres (cuotas, valor){
     if (cuotas == "doce"){
         return valor * 0.2 
     }
 }



     