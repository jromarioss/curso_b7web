/* function adicionar(...numeros) {
  console.log(numeros);
}
adicionar(5, 4, 6, 6, 2, 9); */


function adicionar(nomes, ...novosNomes) {
  let newNomes = [...nomes, ...novosNomes];
  console.log(newNomes);
}
let nomes = ['jose', 'paulo'];
let outros = adicionar(nomes, 'Antonio', 'maria');