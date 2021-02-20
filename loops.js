let miArray = []
let ini = 1

while (ini <=7){
  miArray.push(ini)
  ini = ini + 1
  console.log(ini)
}
miArray
let len = miArray.length
for(let i =0; i <=len; i++){
  delete miArray[i]
}
miArray