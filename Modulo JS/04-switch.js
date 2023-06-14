const mesAno = 11

if(mesAno == 1)       console.log("Janeiro")
else if(mesAno === 2) console.log("Fevereiro")
else if(mesAno === 3) console.log("Março")
else if(mesAno === 4) console.log("Abril")
else if(mesAno === 5) console.log("Maio")
else if(mesAno === 6) console.log("Junho")
else if(mesAno === 7) console.log("Julho")
else if(mesAno === 8) console.log("Agosto")
else if(mesAno === 9) console.log("Setembro")
else if(mesAno === 10)console.log("Outubro")
else if(mesAno === 11)console.log("Novembro")
else if(mesAno === 12)console.log("Dezembro")
else console.log ("Mês inexistente")

/*
outra forma de se fazer 
isso é usando o switch
*/
const mesAno2 = 1

switch (mesAno2){
  case 1:
    console.log("Janeiro")
  break
  case 2:
    console.log("Fevereiro")
  break
  case 3:
    console.log("Março")
  break
  case 4:
    console.log("Abril")
  break
  case 5:
    console.log("Maio")
  break
  case 6:
    console.log("Junho")
  break
  case 7:
    console.log("Julho")
  break
  case 8:
    console.log("Agosto")
  break
  case 9:
    console.log("Setembro")
  break
  case 10:
    console.log("Outubro")
  break
  case 11:
    console.log("Novembro")
  break
  case 12:
    console.log("Dezembro")
  break
  default:
    console.log ("Mês inexistente")
  break
}