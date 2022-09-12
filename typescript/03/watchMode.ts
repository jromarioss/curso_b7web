/* const nome: string = 'Jose';

function josemari(n1: number): string {
  return 'O parãmentro era: ' + n1;
}

josemari(12); */

const botao = document.querySelector('button') as HTMLButtonElement;
botao.addEventListener("click", () => {
  console.log('clicou!');
});