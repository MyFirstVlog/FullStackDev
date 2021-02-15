
//metodos, funciones que pertenecen al objeto. Acciones que le dan dinamismo al objeto
var persona ={
  nombre:'Alejandro',
  apellido:'Estrada',
  id:5  ,
  nombreCompleto : function(){
    console.log(arguments)
    return `${this.nombre} ${this.apellido}` 
  }
}

persona.nombreCompleto()

//arrays

const miArray = [1,2,3,'hola',28,{prop:1},true]

var iterator = miArray[Symbol.iterator]() //objeto iterador; aqui lo volvimos iterables
iterator.next().value
iterator.next().value
iterator.next().value
iterator.next().value
iterator.next().value
iterator.next().value
typeof(miArray)

miArray.indexOf(28)