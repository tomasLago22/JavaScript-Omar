const productos = [
    {name: "Javascript"},
    {},
]

console.log(productos)

//PARSE PARA CONVERTIR JSON A OBJETO

const enJSON = `{"name: "JS", "price":5000,}`

const objeto = JSON.parse(enJSON)

console.log(objeto)

// STRINGIFY PARA CONVERTIR DE OBJETO A JSON

const curso = {
    titulo: "JavaScript",
    duracion: 17,
    finalizado: false,
    profe: "el flaco con panza"
}

console.log(curso)

//PASO DE OBJETO A JSON

const aJSON = JSON.stringify(curso)

console.log(aJSON)


/* Local storage, La info resiste mas alla que la pc se haya apagado

Session storage, al cerrar el navegador, la info se pierde

*/

/*

GET = Conseguir



SET = Asignar



*/


/* localStorage.setItem("curso", "Javascript")


sessionStorage.setItem("curso", "ReactJs")

// Ejemplo

const cursoDos = {
    titulo: "Javascript",
    alumnos: 92,
    precio: 2000,
    finalizado: false
}


//Pasamos este objeto a JSON

const cursoStr = JSON.stringify(cursoDos)
localStorage.setItem("JS", cursoStr)

console.log(cursoStr)  */

const cursos = ["Desarrollo web","JS"]

const cursoStr = JSON.stringify(cursos)

localStorage.setItem("JS", cursoStr)


//OBTENER INFORMACION DEL STORAGE

/* const taller = localStorage.getItem("Cursos")
console.log(JSON.parse(taller)) */

//ACTUALIZAR UN ARRAY 


const cursosArray = JSON.parse(localStorage.getItem("cursos"))

cursosArray.push("Base de datos")

localStorage.setItem("cursos", cursosArray)