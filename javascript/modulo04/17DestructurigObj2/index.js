let pessoa = {
  nome: 'jose',
  sobrenome: 'santos',
  idade: 28,
  social: {
    facebook: 'jromarioss',
    instagram: {
      url: '@jormarios',
      seguidores: 2000
    }
  },
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`
  }
}

/* let {facebook, instagram} = pessoa.social; */
/* let {nome, idade, social: {instagram}} = pessoa; */
/* let {nome, idade, social: {instagram: {url: instagram, seguidores}}} = pessoa */

// função pega o nome e retornando
/* function pegarNomeCompleto(obj) {
  return obj.nome + ' ' + obj.sobrenome;
} */
function pegarNomeCompleto({nome, sobrenome}) {
  return obj.nome + ' ' + obj.sobrenome;
}
// pegarNomeCompleto(pessoa);

// console.log(nome, idade, instagram, seguidores);
console.log(pegarNomeCompleto(pessoa));