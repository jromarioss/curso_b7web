let info = ['jose romario', 'jromarioss', 'santos', '@jromario'];

// let [nomeCompleto, nome, sobrenome, instagram] = info;
let [ , , ,instagram] = info; // para pular

console.log(instagram);

let [nome, sobrenome, idade = 90] = ['jose', 'santos'];
console.log(nome, sobrenome, idade);

function criar() {
  return [1, 2, 3];
}
let [a, b, c] = criar();
console.log(a, b, c);