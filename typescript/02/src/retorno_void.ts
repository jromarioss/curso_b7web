// quando um função não retorn nada
/* function removerE(el: HTMLElement): void {
  //prcesso remoção element
  el.remove();
}

removerE(document.getElementById('teste')); */

/* function algo(): void {
  return true;
} */

type QualquerFuncao = () => void; //não espera nem um tipo de retorno

const algo: QualquerFuncao = () => {
  return 'dfdlwdlawd';
}
let retorno = algo();