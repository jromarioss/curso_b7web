function resumo(usuario: {nome: string, idade?: number}) {
  if (usuario.idade != undefined){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`;
  } else {
    return `Olá ${usuario.nome}, tudo bem?`;
  }
}
//implementação da função
let u = {nome: 'jose', idade: 90};
console.log(resumo(u));
resumo(u);