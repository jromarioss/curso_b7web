function alterar(titulo, cmp) {
  document.getElementById('titulo').innerHTML = titulo;
  document.getElementById('campo').value = cmp;
}

let titulo = "Alterado por parâmetro!";
let campos = "Alterado por parâmetro!!"
alterar(titulo, campos);
// alert('funcionou');

function somar(x, y) {
  let total = x + y;

  return total;
}

let conta = somar(4, 2);
console.log(conta);