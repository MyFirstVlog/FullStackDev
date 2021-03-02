/*setTimeout(()=>{
    console.log('Ejecucion Nro 1')
    setTimeout(()=>{
        console.log('Ejecucion Nro 2')
        setTimeout(()=>{
            console.log('ejecucion Nro 3')
        },10000)
    },2000)
},3000)*/

const funcion1 = ()=>{
    
    setTimeout(()=>{
        console.log('Ejecucion Nro 2')
        setTimeout(()=>{
            console.log('ejecucion Nro 3')
        },10000)
    },2000)
}

const funcion2 = () =>{
    console.log('Ejecucion Nro 1')
    setTimeout(funcion1, 2000);
}


setTimeout(funcion2,3000)