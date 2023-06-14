let numA = 0
let numB = 1
let numC = 0
let fibonnaci = 0
for(let cont = 0; cont <= 20; cont++){
  numC = numA + numB
  numA = numB
  numB = numC
  fibonnaci = fibonnaci + " " + numA
}
console.log(fibonnaci)

numA = 0
numB = 1
numC = 0
fibonnaci = 0
cont = 0
while(cont <= 20){
  numC= numA+numB
  numA=numB
  numB=numC
  fibonnaci = fibonnaci + ", " + numA
  cont++
}
console.log(fibonnaci)