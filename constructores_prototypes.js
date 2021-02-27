// clases <prototype>
function miObjeto(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
  
  // metodo
  this.getNombreCompleto = function(){
    return `${this.nombre} ${this.apellido}`
  }
}

//Se puede crear un objeto a partir de la definicion de un tipo padre, contrato anterior. 

let objeto1 = new miObjeto('alejo','estrada')
objeto1

//ahora creando un objeto como un json

let objetoJson = {nombre: 'milena', apeliido: 'Montoya', getNombreCompleto:function(){return}}

//no tiene un tipo predeterminado de objeto, solo es un objeto, sin naturaleza

//Supongamos un objeto sin nombre
// clases <prototype>
function miObjeto2(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
  
  // metodo
  this.getNombreCompleto = function(){
    return `${this.nombre} ${this.apellido}`
  }
}


miObjeto2.prototype.nombre = 'vacio'
miObjeto2.prototype.apellido = 'vacio'
//ahora creando un objeto con la modificacion que se realizo 

miObjeto2 =new miObjeto2('Camilo')

miObjeto2



//Volvemos acrear el objeto y definimos 


function miObjeto3(){
  
  // metodo
  this.getNombreCompleto = function(){
    return `${this.nombre} ${this.apellido}`
  }
  this.setNombre= function(nombre){
    this.nombre = nombre
  }
  this.setApellido = function(apellido){
    this.apellido = apellido
  }
}


//ahora defino un objeto sin pasarle nada

let ObjetoMutant = new miObjeto3()

miObjeto3.prototype.nombre = 'vacio'
miObjeto3.prototype.apellido= 'vacio'

ObjetoMutant
//ya gaurda el nombre porque lo hicimos de forma manual, es deicr, las props de ese objeto


///tambien se le pueden agregar agregar los metodos teniendo un objeto vacio


function miObjeto4(){

}
miObjeto4.prototype.nombre = 'vacio'
miObjeto4.prototype.apellido= 'vacio'

miObjeto4.prototype.setNombre= function(nombre){
    this.nombre = nombre
  }
miObjeto4.prototype.setApellido = function(apellido){
    this.apellido = apellido
  }
miObjeto4.prototype.getNombreCompleto = function(){
    return `${this.nombre} ${this.apellido}`
  }
miObjeto4.prototype

// pero estarian agregadas en prototype


//creamos objeto

let ObjetoV2 = new miObjeto4()
ObjetoV2.nombre

ObjetoV2.setApellido('Diana')
ObjetoV2.setNombre('Moscoso')

ObjetoV2.getNombreCompleto()

//si los metodos no aparecen en el objeto como tal, se pueden almacenar el prototipo, por ello es importante de verificar 
