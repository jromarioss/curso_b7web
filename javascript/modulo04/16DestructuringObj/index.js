let pessoa = {
  nome: 'jose',
  sobrenome: 'santos',
  idade: 28,
  social: {
    facebook: 'jromarioss',
    instagram: 'jromarios'
  },
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`
  }
}

let {nome, sobrenome: sbn, idade = 15} = pessoa;

console.log(nome, idade, sbn);