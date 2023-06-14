const newArray = [1, 2, 3, 4, 5, 6]

//splice: corta o array, o primeiro parametro é o inicio e o segundo é a quantidade
console.log(newArray.splice(0, 1))

// map: alterar os valores dentro do array seguindo uma regra 
console.log(newArray.map((elemento) => {
  return elemento * 2
}))

//filter: filtrar os elementos dentro do array
console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0
}))

//reduce: reduz o array pra algum outro elemento
console.log(newArray.reduce((acumulado , elemento) => {
  return acumulado + elemento
}, 0))