const listaUsuarios = document.getElementById("lista-usuarios");
const nombreUsuario = document.getElementById("name")
const boton = document.getElementById("boton");
let usuarios  = []

function render() {
  const usuariosRender = usuarios
    .map(usuario => `<tr><td>${usuario.nombre}</td></tr>`)
    .join(" "); //junta el array de objetos con texto html
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
}

function enviarDatos() {
  
  const datos = {nombre: nombreUsuario.value}

  fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios', { // es una promesa
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(datos), //transformacion a un stringify, si no noda 
    }) //retorna una promesa
        .then(response=>response.json())       //retorna promesa nueva
        .then(respuestaJson => {
            console.log('respuestaJson',respuestaJson)
            refrescar() // debemos de convertir en json 

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
refrescar();

boton.onclick = enviarDatos;
//POST -> para crear
//PUT -> actualizar
//GET -> visualizar
//DELETE -> eliminar