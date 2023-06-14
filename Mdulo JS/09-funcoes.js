function soma (A, B){
  return A + B
}
function subtracao (A, B){
  return A - B
}
function multiplicacao (A, B){
  return A * B
}
function divisao (A, B){
  return A / B
}
function calculadora (tipo){
  const A = 200
  const B = 4
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
  else if (tipo === "multiplicacao") return multiplicacao(A, B)
  else if (tipo === "divisao") return divisao(A, B)
}
function par(num){
  if(num = 0) return num
  else if (num % 2 === 0) return num
}
const resultado = par(3)
//console.log (resultado)

for (let i = 0; i <= 100; i++){
  if (par(i)) 
  console.log(i)
}