const listaUsuarios = document.getElementById('lista_Usuarios') // es el unordered-list

function reqListener(){

   const usuarios =  JSON.parse(this.responseText) //JSON.parse convierte el texto de responsive en un objeto de JS
   console.log(usuarios)
   const usuariosRender = usuarios.map( singleUser => `<li>${singleUser.nombre}</li>`).join('') //map, toma cada valor y le realizo una funcion, el join para unitr y quitar las comas 
   console.log(usuariosRender)
   listaUsuarios.innerHTML = usuariosRender //para introducir los ietems en el html osea en el ul
}

var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener) // evento de cargar 
oReq.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios")
oReq.send()