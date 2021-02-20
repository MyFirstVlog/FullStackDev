let miArray = ['hola', 'buen dia', 'adios'];

function convertirUpperCase(texto){
  console.log(texto.toUpperCase())
  return 
}

//miArray.forEach(convertirUpperCase) //no es necesario poner los parentesis

function miFuncion(array, funcionExe){
  len=array.length
  for(let i = 0; i<=len-1; i++){
    funcionExe(array[i])
  }
}

miFuncion(miArray,convertirUpperCase) //esto hace lo mismo que el foreach

const arreglo=[1,4,8,9,16]

const map1= arreglo.map(element=>element * 2)
map1 //esta opcion sirve para evitar crear funcion y ponerla como parametro en el map o en el forEach