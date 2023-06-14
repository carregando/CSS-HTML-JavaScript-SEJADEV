/*
const numbers = [10, 20, 30]
let sum = 0
for (let num of numbers){
  sum = sum + num
}
console.log (sum)
const media = sum / numbers.length
console.log (media)
*/
const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorio = 0
let facultativo = 0
let nãoEleitor = 0
for (let idade of lista){
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) nãoEleitor++
  else facultativo++
}
console.log("obrigatório", obrigatorio)
console.log("facultativo", facultativo)
console.log("não eleitor", nãoEleitor)