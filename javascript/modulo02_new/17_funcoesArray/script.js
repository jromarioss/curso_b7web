let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];

fruits[fruits.length -1] = 'Uva'; // altera o último item

fruits[0] = 'Pêra'; // redefine o valor do indice 0

fruits.join(' '); // retorna uma string, com todos os valores separado por espaço, ñ altera o array

fruits.shift(); // deleta o primeiro item do array

fruits.pop(); // deleta o último item do array

fruits.push('Kiwi'); // adiciona um item no final do array

console.log(fruits.length); // quantos items tem no array