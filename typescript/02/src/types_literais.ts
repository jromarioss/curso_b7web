/* const nome: string = 'jose';

nome = 'pedro'; */

/* function mostrarTexto(
  texto: string, 
  alinha: 'left' | 'right' | 'center') {
    return `<div style='text-align: ${alinha}'>${texto}</div>`;
}

mostrarTexto('jose', 'left');
mostrarTexto('jose', 'right');
mostrarTexto('jose', 'centdawder'); */

/* function temNome(nome: string): true | false {
  if (nome != '') {
    return true;
  } else {
    return false;
  }
}
temNome('maria'); */

type Opcoes = {
  width: number,
  height: number
}

function configurar(props: Opcoes | 'auto') {

}
configurar({width: 100, height: 200});
configurar('auto');
/* configurar('automatico'); */