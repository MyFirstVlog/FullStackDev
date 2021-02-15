
function sumar(num1,num2){
    console.log(arguments)
    typeof(arguments)
    num = num1 + num2;
    return num;
}



sumar(1,2);


/* como objeto
function sumar(numeros){
    console.log(numeros)
    
    num = numeros.num1 + numeros.num2;
    return num;
}



sumar({num1:1,num2:2});

*/

/* como objeto segunda opcion
function sumar({num1, num2}){
    console.log(numeros)
    
    num = numeros.num1 + numeros.num2;
    return num;
}



sumar({num1:1,num2:2});

*/