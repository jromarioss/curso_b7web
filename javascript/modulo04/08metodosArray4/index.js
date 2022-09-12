let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find(function(item) {
  return (item === 16) ? true : false;
});

let res = lista2;
console.log(res);

let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.findIndex(function(item) {
  return (item === 16) ? true : false;
});

let res2 = lista4;
console.log(res2);

let lis = [
  {id: 1, nome: 'jose', sobrenome: 'santos'},
  {id: 2, nome: 'paulito', sobrenome: 'vititu'},
  {id: 3, nome: 'carlito', sobrenome: 'cabrito'}
];

let pessoa = lis.find(function(item) {
  return (item.id === 3) ? true : false;
});
let pessoa2 = lis.findIndex(function(item) {
  return (item.id === 3) ? true : false;
});

let res3 = pessoa;
let res4 = pessoa2;
console.log(res3);
console.log(res4);