/* function azul() {
  limpa()
  document.getElementById('titulo').classList.add('azul');
}

function vermelho() {
  limpa()
  document.getElementById('titulo').classList.add('vermelho');
}

function verde() {
  limpa();
  document.getElementById('titulo').classList.add('verde');
}

function limpa() {
  document.getElementById('titulo').classList.remove('verde');
  document.getElementById('titulo').classList.remove('vermelho');
  document.getElementById('titulo').classList.remove('azul');

} */

function mostrarTelefone(elemento) {
  elemento.style.display = 'none';
  document.getElementById('telefone').style.display = 'block';
}

function mostrarBotao(elemento) {
  elemento.style.display = 'none';
  document.getElementById('btn').style.display = 'block';
}