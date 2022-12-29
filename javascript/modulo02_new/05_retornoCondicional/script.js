function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let verificacao = maiorDeIdade(15);
console.log(verificacao);