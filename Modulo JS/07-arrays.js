let array = [true, false, "string aqui", 1923]
// ordem      0      1        2            3
console.log(array)
console.log(array[2])// especifica o que eu quero mostrar
array.push(1000, "outra aqui")// add elemento
console.log(array)
array.pop()//tira o ultimo elemento do array

let newArray = [10, 20, 30]
console.log(newArray.length)//mostra o tamanho do array

let i = 0
while(i<newArray.length){
  //console.log(newArray[i])
  i++//limitador do while
}

for(i; i < newArray.length; i++){
  console.log(newArray[i])
}

//in e of facilitam muito a nossa vida
//for...in : o in ja diz pro JavaScript que ele quer as posições de dentro do newArray
for(let pos in newArray){
  //console.log(pos)
  //console.log(newArray[pos])
}


//for...of : inter uma forma mais facil dentro do newArray
for(let arr of newArray){
  //console.log(arr)
}