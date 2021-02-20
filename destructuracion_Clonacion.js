let miArray = [1,2,'hola',()=>console.log('soy funcion'), true]

let [numeroUno, numeroDos, hola, unaFuncion, buleano] = miArray

numeroUno
numeroDos
hola

//Destructuracion de array, simplemete es basado en el orden

let miObjeto = {a:1,b:2,c:'hola', d: function(){console.log('soy una funcion')},e:true}
let {a,b,c,d,e} = miObjeto

a
b
c
d
d()
e

//Destructuracion de objeto, es importante tener el mismo identificador de como se definio el objeto 

//spread operator,  separa las funciones en unas variables y poner los atributos restantes en otras variables

let miObjeto2 = {a:1,b:2,c:'hola', d2: function(){console.log('soy una funcion')},e:true}

let {d2, ...otros }= miObjeto2

d2
otros

//Ahora se parando en arrays 

let miArray2 = [1,2,'hola',()=>console.log('soy funcion'), true]

let[numeroUno2,numeroDos2, ...elResto2] = miArray

numeroUno2
numeroDos2
elResto2

//entonces haciendo mutacion de cambios referenciando al mismo espacio de memoria 

let mutantObject = miObjeto2

mutantObject.a = 7

miObjeto2.a //le cambio el valor a amabos atributos INCREIBLE !!!

//Si no quiero que los objetos utilicen el mismo espacio de memoria, entonces uso lo siguiente:

let mutantObject2 = {...miObjeto2}

mutantObject2.a = 10
mutantObject2

miObjeto2

//agregando objeto al objeto2
let miObjetoMutant = {a:1,b:2,c:'hola', d2: function(){console.log('soy una funcion')},e:true, f:{f1:'sof f1', f2: 'soy f2', f3: () => {} }}

miObjetoMutant.f

let mutantObject3 = {...miObjetoMutant}

mutantObject3.f.f1 = 'cambie el soy f14'
// Las propiedades externas dentro del objeto al copiarse al ser modificadas no afecten el original, pero si modificamos un objeto con atributos internos, estos si cambian y comparten el mismo espacio de memoria con el original

miObjetoMutant

mutantObject3


