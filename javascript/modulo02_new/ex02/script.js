function calcularImovel(metragem, quartos) {
  let metro = 3000;

  if (quartos === 1) {
    return metragem * metro;
  } else if (quartos === 2) {
    return metragem * metro * 1.2;
  } else {
    return metragem * metro * 1.5;
  }
}

let metro = 123;
let quatro = 3;
let preco = calcularImovel(metro, quatro);
console.log(`A casa custa R$ ${preco}`);