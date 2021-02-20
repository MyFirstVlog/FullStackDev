//arrow function

const miFuncion2 = () => console.log('ejecuto miFuncion2')

function miFuncion(){
  console.log('1 ejecute miFuncion')
  miFuncion2() // debo de llamarse
}

//aqui puedo cambiar la funcion de arriba por una arrow function

const miFuncion3 =() => {
  console.log('1 ejecute miFuncion')
  miFuncion2() // debo de llamarse
}

miFuncion()
miFuncion3()

//Particularidades de arrow function

console.log(miFuncion5())

function miFuncion5() {
  return 100
}

//JS Primero analiza los codigos interpreta y luego coloca las funciones en sus respectivos lugares, osea arriba

//las arrow function no funcionan a la hora de usar el hoisteo
 
/* este es el caso que no da
console.log(miFuncion5())

const miFuncion5 = () => {
  return 100
}
*/



//CASO PARTICULAR DE LAS ARROW FUNCTION

//this 
// 

function miFuncion(){
  return function miFuncion2(){
    return this
  }
}
//retorna window
/*
 const a = miFuncion()
 const b = new miFuncion()*/

//Ahora creando el this window con arrow function

/
function miFuncion(){
  return () => {
    return this
  }
}
undefined
miFuncion
ƒ miFuncion(){
  return () => {
    return this
  }
}
miFuncion()
() => {
    return this
  }
miFuncion()()
Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

// otra opcion de lo mismo

function miFuncion(){
  this.miFuncion2 = function(){
    return this
  }
}

const aaa = new miFuncion()
undefined
aaa.miFuncion2
ƒ (){
    return this
  }
aaa.miFuncion2()
miFuncion {miFuncion2: ƒ}



//
const miFuncion = () =>{
  return function miFuncion2(){
    return this
  }
}

miFuncion //devuelve el arrow
miFuncion() // lo que esta dentro del arrow
miFuncion()() //devuelve lo que esta dentro de la funcion es decir window