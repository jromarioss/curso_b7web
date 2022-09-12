function resumo(usuario: {nome: string, idade: number}) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`;
}
//implementação da função
let u = {nome: 'jose', idade: 90};
console.log(resumo(u));
resumo(u);