let nome = 'jose romario soares';
let nome2 = 'romario';
console.log(nome2.length);

let res = '';

if (nome.indexOf('romario') > -1) {
  res = 'achou';
} else {
  res = 'não achou';
}

console.log(res);