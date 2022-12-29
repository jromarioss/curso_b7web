let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];

// verifica se tem a Uva
if (fruits.includes('Uva')) {
  console.log('tem sim');
} else {
  console.log('tem não');
}

/* let list = fruits.some((fruit) => {
    return fruit.length > 3;
}); // retorna true se pelo menos 1 condição for verdadeira

console.log(list); // true */

/* let list = fruits.every((fruit) => {
  return fruit.length > 3;
}); // retorna true e false se satisfazer a condição

console.log(list); // false */

/* let list = fruits.filter((fruit) => {
  if (fruit.length > 4) {
    return true;
  }
}); // faz um filtro no array e gera um novo array, retorna só os items que for verdadeiro

console.log(list); // [ 'Laranja', 'Banana' ] */