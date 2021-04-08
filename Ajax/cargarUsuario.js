let usuario = []
const listaUsuarios = document.getElementById("lista-usuarios");
//debemos obtener del url el usuario que se cargara

function tomarDatosUrl(){
    let datosUrl = location.search.replace('?','').split('=')
    datosUrl = datosUrl[1]
    return datosUrl
}

function render(){
    const usuarioRender =`<tr>
                            <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
                            <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
                            <td>${usuario.pais ? usuario.pais : 'vacio'}</td>                                                 
                          </tr>`// la clase me genera cuando haga getElementByClassName -> un arreglo (entrega una coleccion de elementos)
    
  console.log(usuarioRender);
  listaUsuarios.innerHTML = usuarioRender;
}

function obtenerUsuario() {
    fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${tomarDatosUrl()}`)
    .then(response => response.json()) // no es legible
    .then(rtaUsuario => {
      console.log('rtaUsuarios', rtaUsuario)
      usuario = rtaUsuario
      render()//ya trae el array completo
    })         
    
      
  
     // por defecto es una peticion GET (importante !!!)
  }


  tomarDatosUrl()
  obtenerUsuario()