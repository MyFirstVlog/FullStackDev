/*const funcion = ()=>{ //recibe una funcion, entonces recibe callback
    console.log('Me Ejecute Despues')
}
setTimeout(funcion, 3000); //solo es necesario poner el nombre sin(), pues ya setTimeout tiene internamente la habilidad de ejecucion*/

const funcion = ()=>{ //recibe una funcion, entonces recibe callback
    setTimeout(() =>{
        console.log('Me Ejecute Despues')
    },3000);
    
};
funcion();