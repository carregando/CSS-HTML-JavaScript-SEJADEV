const person = {
  name: "Humberto Ferreira",
  lastName: "Lemos"
}

// Object.keys(): Cria um array com todas as chaves do objeto
console.log(Object.keys(person))

// Object.values(): Cria um array com todos os valores do objeto
console.log(Object.values(person))

// Object.entries(): cria um array com um array de objetos e valores
console.log(Object.entries(person))
/*
console.log(Object.entries(person)) = [['name', 'Humberto Ferreira'] , ['lastName', 'Lemos']]
*/
const livros = {
  'Livro A': 19.90,
  'Livro B': 97.00,  
  'Livro C': 20.00
}

const values = Object.values(livros)
const sum = values.reduce((val, acc) => {
  return val + acc
}, 0)
console.log(sum) 