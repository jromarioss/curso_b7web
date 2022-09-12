let carro = {
  nome: 'Fiat',
  modelo: 'Uno',
  peso: '750kg',
  ano: '2005',
  portas: 4,
  combustivel: 'Flex',
  ligar: function() {
    console.log("vrum vrum");
  },
  desligar: function() {
    console.log("Motor desligando");
  },
  dirigir: function() {
    console.log("Riiiiiiiiiiiiihhh");
  }
}

console.log(`O carro ${carro.modelo} do ano ${carro.ano} é ${carro.combustivel}`);
carro.ligar();
carro.dirigir();
carro.desligar();