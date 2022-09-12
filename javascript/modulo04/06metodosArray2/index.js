let lista = ['ovo', 'farinha', 'corante', 'massa'];
let list2 = ['prato', 'cabide', 'arruela'];

let res = lista.concat(list2);

lista.splice(2, 2, 'bolo');

res.sort();
res.reverse();

console.log(lista);
console.log(res);