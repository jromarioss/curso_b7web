let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7]

console.log(outros);

let info = {
  nome: 'jose',
  sobrenome: 'santos',
  idade: 10
}

let novainfo = {
  ...info,
  cidade: 'cerquilho',
  rua: 'tralala',
  num: 23,
  pais: 'BR'
}
console.log(novainfo);

function addInfo(info) {
  let newInfo = {
    ...info,
    status: 0,
    token: 'fsefsef',
    date: "-- -- --"
  }
  return newInfo
}
console.log(addInfo({nome: 'jose', sobrenome: 'santos'}));