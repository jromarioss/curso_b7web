let num1 = document.getElementById("inNum1") as HTMLInputElement; //vem em forma string
let num2 = document.getElementById("inNum2") as HTMLInputElement; //é um elemento html input
let botao = document.getElementById("btCalcular");
let res = document.getElementById("resultado");

function calcular(n1: number, n2: number) {
  return n1 + n2;
}
// Ele concatena com sinal de +
botao.addEventListener("click", function() {
  res.innerHTML = calcular(Number(num1.value), Number(num2.value)).toString();
});