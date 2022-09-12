function verde() {
  removeClass();
  document.querySelector('#exemplo').classList.add('verde');
}

function vermelho() {
  removeClass();
  document.querySelector('#exemplo').classList.add('vermelho');
}

function azul() {
  removeClass();
  document.querySelector('#exemplo').classList.add('azul');
}

function removeClass() {
  document.querySelector('#exemplo').classList.remove('vermelho');
  document.querySelector('#exemplo').classList.remove('verde');
  document.querySelector('#exemplo').classList.remove('azul');
}