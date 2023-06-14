//o objeto é uma constante unica que declara varios valores dentro de uma so constante

const pessoa = {
  nome: "Humberto",
  idade: 16,
  altura: 1.90,
  casado: false,
  notas: [8, 10, 9, 7.5, 7],
  endereco:{
    rua: "rua z, y, z",
    bairro: "Real Parque",
    numero: 2177,
  }
}

console.log(pessoa["nome"])
console.log (pessoa.nome) //mais facil e curto
console.log(pessoa["notas"][2]) //colchetes são importantes!!
console.log (pessoa.notas[2])//mais facil e curto
console.log(pessoa["endereco"]["bairro"])
console.log (pessoa.endereco["bairro"])

const pessoas = [pessoa, pessoa]
console.log (pessoas)