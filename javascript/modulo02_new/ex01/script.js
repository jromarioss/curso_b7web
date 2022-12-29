function calc(n1, n2) {
  let porcentagem = (n1 * n2) / 100;
  return porcentagem;
}

let x = 40;
let y = 10;

let pct = calc(x, y);
console.log(`${x}% de ${y} é ${pct}`);