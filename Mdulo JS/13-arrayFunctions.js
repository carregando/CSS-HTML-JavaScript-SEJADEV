const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

// forEach: Passa por TODOS os elementos do array
array.forEach((elemento, posicao) => {
  console.log(`${elemento} - posição ${posicao}`)
})

// find: verifica se TEM O ELEMENTO que vc procura dentro do array
const valor = array.find((elemento) =>{
  return elemento === 10
})
console.log ("elemento:", valor)
//ou
const valor2 = array.find((elemento) =>{
  if (elemento === 10) return true
  return false
})
console.log ("elemento:", valor2)

//findIndex: retorna a POSIÇÃO do elemento
const index = array.findIndex((elemento) =>{
  if (elemento === 10) return true
  return false
})
console.log("posição do elemento:", index)

//some: retorna true se houver PELO MENOS um número que satisfaz a condição
const some = array.some((elemento) =>{
  if (elemento >= 20) return true
  return false
})
console.log(some)

//every: retorna true se TODOS os números satisfazem a condição
const every = array.every((elemento) =>{
  if (elemento >= 20) return true
  return false
})
console.log(every)