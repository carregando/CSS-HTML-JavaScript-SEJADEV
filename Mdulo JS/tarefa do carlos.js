let num1 = 1
let num2 = 0
let logica =""

for(let cont = 1; cont <= 15; cont++){
  if(cont % 2 > 0){
    num2 = num1 * 3
} else num2 = num1 + 5
  logica = logica + " " + num1
  num1 = num2
}
console.log(logica)