//tema de JS, en el navegador 
const obtenerNombre = () => 'Camilo'; // el retorno puede ser directo, recordar que la flecha indica retorno 


function obtenerApellido(){
    return 'Montoya';
}

function obtenerNombreCompleto(){
    const nombre = obtenerNombre();
    const apellido = obtenerApellido();

    return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();

console.log('El nombre completo es: ', nombreCompleto);

//para que se pueda ejecutar el archivo js, se debecrear un archivo html que lo contenga