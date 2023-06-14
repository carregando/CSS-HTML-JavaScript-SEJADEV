function Pessoa (nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome,
  }

  pessoa.nomeCompleto =  `${nome} ${sobrenome}` 
  return pessoa
}

const pessoaA = Pessoa("José", "Fortes")
const pessoaB = Pessoa("João", "Teste")
const num = 1

console.log(pessoaA, pessoaB)
console.log (num)