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
        
        
        
        /*let misPromesas = [];
        for (i=0;i<=10;i++){
        misPromesas = [...misPromesas, fabricaDePromesas(i)]
        
        }

    
    Promise.race(misPromesas).then(respuesta => console.log(respuesta)).catch(razon => console.log(razon)) */

    //Async Function describe una objeto de funcion asincrona deben retornar una promesa
    //permiten usar palabra await, pausa la ejecucion de la ejecucion

    async function miFuncion() { //devuelve promise sin necesidad de ponerla ya retorna un valor
        try{ // si hay cualquier tipo de error, adicionalmente ala promesa entraria en el catch, si no lo hay entra al try
            const miPromesa1 = await fabricaDePromesas(1) //espera el resultado, no hay que ser then 
            //console.log('Este es el valor de la promesa 1 : ',{miPromesa1}) //imprimimos promesa como objet
            return miPromesa1
        }catch(error){
            //console.log('Hubo un error')
            return error
        }
        
    }

    function miFuncionNormal(){ //no devuelve nada 
            const miPromesa2 = fabricaDePromesas(2).then(rta => console.log(rta)).catch(razon => console.log(razon))
            console.log('este es el valor de la promesa 2 ', { miPromesa2})
    }

  
    miFuncion().then(rta => console.log('el resultado de mi solicitud fue: ', rta)).catch(razon => console.log('el resultado de mi solicitud fue: ', razon))