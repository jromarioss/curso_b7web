function validar(usuario, senha) {
  if (usuario === 'pedro' && senha === '123') {
    return true;
  } else {
    return false;
  }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);

if (validacao) {
  console.log('Acesso concedido.');
} else {
  console.log('Acesso negado..');
}