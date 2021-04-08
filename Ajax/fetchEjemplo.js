const listaUsuarios = document.getElementById("lista-usuarios");
const nombreUsuario = document.getElementById("nombre")
const boton = document.getElementById("boton");
const apellidoUsuario = document.getElementById("apellido")
const paisUsuario = document.getElementById("pais")
const resetBotton = document.getElementById("resetBotton")
const indice = document.getElementById("indice")
let usuarios  = []
let botonesEliminar = null
let botonesEditar = null

function render() {
  const usuariosRender = usuarios //las interrogacioines de abajo es por si no se selecciona nada
    .map((usuario, indice) => `<tr>
                        <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
                        <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
                        <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
                        <td><a class="ver" id= "verButton" href='/Ajax/ejemploFetchV2.html?usuario=${indice}'>Ver</a></td>
                        <td><button class="editar" id= "editButton" data-indice=${indice} $>Editar</button></td>
                        <td><button class="eliminar" id= "deleteButton" data-indice=${indice} $>Eliminar</button></td>                        
                        </tr>`) // la clase me genera cuando haga getElementByClassName -> un arreglo (entrega una coleccion de elementos)
    .join(" "); //junta el array de objetos con texto html
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
  botonesEliminar = document.getElementsByClassName('eliminar')
  botonesEditar = document.getElementsByClassName('editar')
  Array.from(botonesEliminar).forEach(element => {
      element.onclick = eliminarUsuario
  });

  Array.from(botonesEditar).forEach(element2 => {
    element2.onclick = editarUsuario
});
}

function enviarDatos(e) {
  e.preventDefault();
  let accion = e.target.innerText
  const datos = {
    nombre: nombreUsuario.value,
    apellido : apellidoUsuario.value, 
    pais : paisUsuario.value    
  }
  let url = null;
  let method = null
  if(accion == 'Enviar Datos'){
      url = 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios'
      method = 'POST'
  }else if(accion == "Save Changes"){
      if(indice.value){
        url = `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`
        method = 'PUT'
      }else{
        return
      }
  }else{
    return
  }

  fetch(url, { // es una promesa
  method: method, // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos), //transformacion a un stringify, si no noda 
    }) //retorna una promesa
        .then(response=>response.json())       //retorna promesa nueva
        .then(respuestaJson => {
            console.log('respuestaJson',respuestaJson)
            refrescar() // debemos de convertir en json 
            resetBotton()

    }).catch((e)=>{
      console.log('e')
      resetBottonText()
    })
  
}

function refrescar() {
  fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
  .then(response => response.json()) // no es legible
  .then(rtaUsuarios => {
    console.log('rtaUsuarios', rtaUsuarios)
    usuarios = rtaUsuarios 
    render()//ya trae el array completo
  })         
  
    

   // por defecto es una peticion GET (importante !!!)
}

function eliminarUsuario(e) {
  e.preventDefault(); //para prevenir de que haga ptra cosa apartir de ese evento 
  
  console.log('eliminarUnUsuario', e.target.dataset.indice)
  
  fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${e.target.dataset.indice}`, { // es una promesa ( lo otro es el indice del usuario a eliminar)
  method: 'DELETE',
  
    }) //retorna una promesa
        .then(response=>response.json())       //retorna promesa nueva
        .then(respuestaJson => {
            console.log('respuestaJson',respuestaJson)
            refrescar() // debemos de convertir en json 

    })
  
}

function editarUsuario(e) {
  e.preventDefault(); //para prevenir de que haga ptra cosa apartir de ese evento 
  
  console.log('editarUnUsuario', e.target.dataset.indice)

  if(e.target.dataset.indice){
    const usuario = usuarios[e.target.dataset.indice]

    nombre.value = usuario.nombre ? usuario.nombre : " "
  
    apellido.value = usuario.apellido ? usuario.apellido : " " // para evitar problemas
  
    pais.value = usuario.pais ? usuario.pais  : " "
  
    indice.value = e.target.dataset.indice 
  
    console.log(e,usuario)

    boton.innerText = "Save Changes"
  }else{
    boton.innerText = "Enviar Datos"
  }

  

  
  
}

function resetBottonText (){
  boton.innerText = "Enviar Datos"
  nombre.value = " "
  
  apellido.value = " " 
  
  pais.value = " "
}

 //CRUD --> create read update delete y adicionalmente el listar


refrescar();

boton.onclick = enviarDatos;

resetBotton.onclick = resetBottonText;


//POST -> para crear
//PUT -> actualizar
//GET -> visualizar
//DELETE -> eliminar