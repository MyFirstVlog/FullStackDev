const lodash = require('lodash') //debe estar en una variable 

let miObjetoMutant = {a:1,b:2,c:'hola', d2: function(){console.log('soy una funcion')},e:true, f:{f1:'sof f1', f2: 'soy f2', f3: () => {} }}

miObjetoMutant

let miObjeto2 = lodash.cloneDeep(miObjetoMutant) 
//al aplicar la clonacion profunda , tambien, permite referenciar los objetos en espacios de memoria diferente 

miObjetoMutant.f.f1

miObjeto2.f.f1 = 'he cambiado mi valor'

miObjetoMutant.f.f1   

