let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function(item) {
  return item * 2;
});

let res = lista2;
console.log(res);

let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.filter(function(item) {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

let res2 = lista4;
console.log(res2);

let lista5 = [45, 4, 9, 16, 25];
let lista6 = [];

lista6 = lista5.every(function(item) {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

let res3 = lista6;
console.log(res3);

let lista7 = [45, 4, 9, 16, 25];
let lista8 = [];

lista8 = lista7.some(function(item) {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

let res4 = lista8;
console.log(res4);