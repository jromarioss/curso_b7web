/* type NomeCompleto = string;
let nome: NomeCompleto = 'Jose';

type Idade = string | number;
let idade: Idade = 90;
function mostrarIdade(i: Idade): Idade {
  return i;
} */

/* type User = { //não pode alterar
  nome: string,
  idade: number
} */
interface User { //pode alterar
  nome: string,
  idade: number
}

function resumoo(usuario: User) {
  return `Olá ${usuario.nome}, vc tem ${usuario.idade} anos`;
}
resumoo({nome: 'jose', idade: 20});