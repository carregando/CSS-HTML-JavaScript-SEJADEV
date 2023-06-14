function fatorial(num){
  let fatorial = 1
  while (num >= 2){
    fatorial = fatorial * num
    num--
  }
  return fatorial
}
console.log(fatorial(5))


function fatoracaoRecursiva(inc){
  let x = inc // varia (pode mudar)
  if (x<= 2) return x
  return fatoracaoRecursiva(x-1) * x
}
console.log(fatoracaoRecursiva(4))