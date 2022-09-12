function fazerRequisicao(url: string, method: 'GET' | 'POST') {
  //....
}
/* type Methods = 'GET' | 'POST';

let url = 'https://google.com.br';
let method: Methods = 'GET'; */
/* fazerRequisicao(url, method); */

type RequestDetail = {
  url: string,
  method: 'GET' | 'POST'
}

let req: RequestDetail = {
  url: 'https://google.com.br',
  method: 'GET'
};
fazerRequisicao(req.url, req.method);