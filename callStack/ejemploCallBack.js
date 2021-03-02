/*const funcion = ()=>{ //recibe una funcion, entonces recibe callback
    console.log('Me Ejecute Despues')
}
setTimeout(funcion, 3000); //solo es necesario poner el nombre sin(), pues ya setTimeout tiene internamente la habilidad de ejecucion*/
 /*
const funcion = ()=>{ //recibe una funcion, entonces recibe callback
    setTimeout(() =>{
        console.log('Me Ejecute Despues')
    },3000);
    
};
funcion();*/

/*
const funciondeCallBack = () => {
    console.log('me ejecute despues')
};

const ejecutarMasTarde = () => {
    setTimeout(funciondeCallBack,3000);
};

ejecutarMasTarde();*/

function sumar(num1, num2){
    return num1 + num2 ;
}

function restar(num1, num2){
    return num1-num2 ;
}

function producto(num1, num2){
    return num1*num2 ;
}
/*
console.log(sumar(5,4));
console.log(restar(5,4));
console.log(producto(5,4));*/

function multiFuncion (num1,num2,operacion){
    const resultado = operacion(num1,num2)
    console.log(resultado)
    
}

multiFuncion(5,4,sumar)

//otra opcion de referenciar la guncion puede ser
multiFuncion(5,4, function(num1,num2){
    return num1 + num2
});