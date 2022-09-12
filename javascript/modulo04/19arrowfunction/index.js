/* function somar(x, y) {
  return x + y;
} */

/* let somar = function(x, y) {
  return x + y;
} */

// let somar = (x, y) => { return x + y; }

let somar = (x, y) => x + y;

// parentese é opcional quando tem 1 parâmetro
let letras = (nome) => nome.length;

console.log(somar(10, 5));
console.log(letras('romario'));