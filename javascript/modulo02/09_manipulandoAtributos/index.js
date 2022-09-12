function trocaImagem(filename, alter, animalName) {
  document.querySelector('.imagem').setAttribute('src', 'images/'+filename);

  document.querySelector('.imagem').setAttribute('alt', alter);

  document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function pegarAnimal() {
  let animal = document.querySelector('.imagem').getAttribute('data-animal');

  alert("O animal é um: " + animal);
}