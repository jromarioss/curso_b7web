/* let telefone = '5'; */

/* padend */
/* console.log(telefone.padEnd(9, '*')); */

let cartao = '12341234123412341234';

let lestDigits = cartao.slice(-4);

let cartaoMasc = lestDigits.padStart(16, "*");
console.log('este é o seu cartão? ', cartao);
console.log('este é o seu cartão? ', cartaoMasc);
