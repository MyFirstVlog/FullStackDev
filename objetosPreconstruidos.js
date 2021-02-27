// como es posible que al yo crear un string por ejemplo con cierta cantidad de caracteres, puede utilizar los metodos del String(), sin si quiera iniciarlo con new 

let str = 'hola'

str instanceof String // esto implica que la raiz de la variable ens i no es un string, no es un objeto preconstruido 

let texto = new String('texto2')

texto instanceof String

texto // aqui me parecen todos los metodos asociados 

/*El objeto anterior precosntruido simplemente se ha construuido para poder trabajar con los textos que se creeen de esta manera, JS convierte la primitica como 'str' y lo convierte en tiempo de ejecucion en ua variable tipo de String()*/

/*Pero solo cuando hago uso de sus propiedades, pero solo en ese momento de ejecucion, puesto que una vez que termine, este vuelve a su valor orignal de primitva */

//Cohersion de tipos, es llamdao del fenomeno

'1' + 1 // tipico caso, opues convierte el uno de lad erecha en un strign en moemento de ejecucion

1..toString() // se debe poner doble punto, porque js piensa que despues del punto le mandaran algun valor numerico para completar el decimal 
 '1' + 1..toString() 

let uno = new Number(1)

//No es buena practica utilizar esos objetos preconstruidos, yo lo utilizaria, para saber los metodos que tienen.

