const pessoa = {
  nome: "Humberto",
  idade: 16,
  altura: "1.90 m",
  casado: false,
  notas: [8, 10, 9, 7.5, 7],
}
const pessoAtualizada ={ //alteração de dados, serve pra array tbm
  ...pessoa,
  idade: 18,
  casado: true,
}
console.log(pessoa)
console.log(pessoAtualizada)

const {nome, idade, altura} = pessoa
console.log(nome)
console.log(idade)
console.log(altura)

//vale pra array tambem
//exemplo:

const array = [10, 20, 3, 4]
const [a, b] = array
console.log(a)
console.log(b)
const newArray = [...array, 10]
console.log(newArray)