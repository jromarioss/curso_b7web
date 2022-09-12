let dia = 61;
let diaNome = '';

switch(dia) {
  case 1:
    diaNome = "Domingo";
    break;
  case 2:
    diaNome = "Segunda-feira";
    break;
  case 3:
    diaNome = "Terça-feira";
    break;
  case 4:
    diaNome = "Quarta-feira";
    break;
  case 5:
    diaNome = "Quinta-feira";
    break;
  case 6:
    diaNome = "Sexta-feira";
    break;
  case 7:
    diaNome = "Sabádo";
    break;
  default:
    diaNome = "Valor inválido";
}

console.log("Hoje é " + diaNome);