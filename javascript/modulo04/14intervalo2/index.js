let timer;

function rodar() {
  timer = setTimeout(function() {
    document.getElementById('demo').innerHTML = 'Esperou ne trouxa';
  }, 3000);
}

function parar() {
  clearTimeout(timer);
}