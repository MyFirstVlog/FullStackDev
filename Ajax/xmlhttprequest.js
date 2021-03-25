const listaUsuarios = document.getElementById("lista-usuarios");
const boton = document.getElementById("boton");

function reqListener() {
  const usuarios = JSON.parse(this.responseText); //convierte de texto como viene en objetos
  console.log(usuarios);
  const usuariosRender = usuarios
    .map(usuario => `<li>${usuario.nombre}</li>`)
    .join(" "); //junta el array de objetos con texto html
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
}

var peticion = new XMLHttpRequest(); //peticion http sin neceisada de recargar la pagina
peticion.addEventListener("load", reqListener);

function enviarDatos() {
  peticion.open(
    "POST",
    "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
    true
  );
  peticion.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  peticion.send("nombre=LUNES24");
  setTimeout(refrescar, 3000); // ya ejecuta la funcion
}

function refrescar() {
  peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  peticion.send();
}

boton.onclick = enviarDatos;
//POST -> para crear
//PUT -> actualizar
//GET -> visualizar
//DELETE -> eliminar