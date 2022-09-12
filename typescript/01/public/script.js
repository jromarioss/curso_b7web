var num1 = document.getElementById("inNum1"); //vem em forma string
var num2 = document.getElementById("inNum2"); //é um elemento html input
var botao = document.getElementById("btCalcular");
var res = document.getElementById("resultado");
function calcular(n1, n2) {
    return n1 + n2;
}
// Ele concatena com sinal de +
botao.addEventListener("click", function () {
    res.innerHTML = calcular(Number(num1.value), Number(num2.value)).toString();
});
