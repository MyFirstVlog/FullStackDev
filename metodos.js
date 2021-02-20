
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



var Persona = {
  name:'',
  Lname:'',
  
  ID : function(nombre, apellido){
      this.name = nombre 
      this.Lname = apellido
      return `${this.name} ${this.Lname}` 
  }
  
}
Persona.ID('alejo', 'estrada')

//Para crear un objeto que tenga un constructor 

function Tree (name) { 
  this.name = name;   
}

var theTree = new Tree( "Redwood" );


//la otra ocion me parece bastante interesante
const objeto = {
  name : 'alejo',
  last : 'estrada',
  
  metodo(){
    this.name = 'jeje'
    return this.name
  }
  
 