const person = {
  nombre: 'Alejandro',
  apellido: 'Estrada',
  edad: 17
}

const person2 = {
  nombre: 'Alejandro',
  apellido: 'Estrada',
  edad: 18
}
 
person.edad = 18

console.log(person)

if (person.edad != 18 ){
  console.log("Puedes tomar Cerveza")
}else{
  console.log("No puedes tomar Cerveza Alcoholico")
}


person.edad === '18'
typeof(person.edad)



