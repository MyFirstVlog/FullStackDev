const miBotton = document.getElementById("miBoton");
//console.dir(miBotton) // representacion en JS
/*miBotton.addEventListener("click",evento=>{ //deteccion del tipo de evento click , y posterior ejecucion de evento
    console.log(evento); 
    alert("Diste click en el boton");
}); //quiero que escuche el evento click y envio el callback
*/

// se puede realizar poniendo la funcion en una variable 

function whenclick(evento){
    console.log(evento); 
    alert("Diste click en el boton");
    console.log('jejej de click')
}
const exeWhenClick = (evento) =>{
     
    alert("Diste click en el boton");
    console.log('jejej de click')
}
miBotton.addEventListener("click",whenclick); //la funcion es un callback