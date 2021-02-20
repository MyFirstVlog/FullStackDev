function miFuncion(){
  this.MiFuncion2= function miFuncion2(){
    this.miFuncion3 = function miFuncion3(){
      this.miFuncion4 = function miFuncion4(){
        return this
      }
      this.miFuncion5 = () =>{
        return this
      }
      
    }
  }
}




// anidacion usando navegador

function miFuncion(){
  this.MiFuncion2= function miFuncion2(){
    this.miFuncion3 = function miFuncion3(){
      this.miFuncion4 = function miFuncion4(){
        return this
      }
      this.miFuncion5 = () =>{
        return this
      }
      
    }
  }
}
undefined
const a = new miFuncion
undefined
a
miFuncion {MiFuncion2: ƒ}MiFuncion2: ƒ miFuncion2()arguments: nullcaller: nulllength: 0name: "miFuncion2"prototype: constructor: ƒ miFuncion2()__proto__: Object__proto__: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()__proto__: Object[[FunctionLocation]]: <unknown>[[Scopes]]: Scopes[0][[FunctionLocation]]: VM157:2[[Scopes]]: Scopes[2]__proto__: Object
a.MiFuncion2()
undefined
const b = new a.MiFuncion2()
undefined
b.miFuncion3()
undefined
b.miFuncion3
ƒ miFuncion3(){
      this.miFuncion4 = function miFuncion4(){
        return this
      }
      this.miFuncion5 = () =>{
        return this
      }
      
    }
const c = new b.miFuncion3()
undefined
c.miFuncion4
ƒ miFuncion4(){
        return this
      }
c.miFuncion4()
miFuncion3 {miFuncion4: ƒ, miFuncion5: ƒ}miFuncion4: ƒ miFuncion4()miFuncion5: () =>{         return this       }__proto__: Object
c.miFuncion5
() =>{
        return this
      }
c.miFuncion5()
miFuncion3 {miFuncion4: ƒ, miFuncion5: ƒ}