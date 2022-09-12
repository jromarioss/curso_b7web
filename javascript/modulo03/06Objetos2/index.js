let carro = {
  nome: 'Fiat',
  modelo: 'Uno',
  peso: '750kg',
  ano: '2005',
  portas: 4,
  combustivel: 'Flex',
  ligado: false,
  ligar: function() {
    this.ligado = true;
    console.log("ligando o " + this.modelo)
    console.log("vrum vrum");
  },
  desligar: function() {
    console.log("Motor desligando...");
  },
  dirigir: function() {
    if (this.ligado === true) {
      console.log("Riiiiiiiiiiiiihhh dirigindo...");
    } else {
      console.log(`Você precisa ligar o ${this.modelo} primeiro.`)
    }
  }
}

carro.ligar();
carro.dirigir();
carro.desligar();