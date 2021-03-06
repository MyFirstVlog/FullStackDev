 /*const miPromesa = new Promise((resolve,reject)=>{ // recibe una funcion en el constructor, un ejecutor o resolver, recibe dos parametros
    //resolve('La promesa fue resuelta')//lama al then y catch cuando falla
    reject('Su promesa fue rechazada') // lo que esta dento de los parentesis es la razon o la respuesta
 }) 

 miPromesa.then(respuesta=>console.log(respuesta), 
        (razon)=>console.log(razon))//recibe dos funciones o encadenarlas son callbacks
*/
   
//ejemplo 2 es una marca de algo que puede demorarse
const fabricaDePromesas = (indice)=>new Promise((resolve,reject)=>{
const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
//console.log('Tiempo de Rechazo ' + tiempoRejected)
//console.log('Tiempo de Aceptacion ' + tiempoResolved)
      setTimeout(()=>{
         reject(`Promesa ${indice} fallida`)
      }, tiempoRejected)
      setTimeout(()=>{
         resolve(`Promesa ${indice} satisfecha`)
      }, tiempoResolved)
      
}) 



let misPromesas = [];
for (i=0;i<=10;i++){
   misPromesas = [...misPromesas, fabricaDePromesas(i)]
   
}
/*misPromesas.forEach(promesaActual =>
   promesaActual
      .then(respuesta=>console.log(respuesta))
      .catch(razon =>console.log(razon))
   )*/

//metodo all, recibe uninterable, objeto que teine indices que puedo recorrer de manera secuencial, recibe prome
//pero resuelva una nueva promesa, espera que todas sean resuletas o alguna rechaza

//Promise.all(misPromesas).then(respuesta => console.log(respuesta).catch(razon => console.log(razon))) //genera un aarray de las promesas que en esta se cumplen
//sile quito los rejected me da un array de las promesas en orden
//si dejo los dos metodos se ejecuten hasta que una es rechazada y para el proceso

//var ale=Promise.allSettled(misPromesas).then(respuesta => console.log(respuesta).catch(razon => console.log(razon)))

//devuelve un aaray de objetos 

Promise.race(misPromesas).then(respuesta => console.log(respuesta)).catch(razon => console.log(razon))
//espera primera promesa tanto de rechazo como de exito es una condicion de carrera