function loadPosts() {
  document.getElementById('posts').innerHTML = "Carrendo....";

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(resultdo) {
    return resultdo.json();
  })
  .then(function(json) {
    montarBlog(json);
  })
  .catch(function(err) {
    console.log("Erro: ", err);
  });
}

function montarBlog(lista) {
  let html = '';

  for (let i = 0; i < lista.length; i++) {
    html += '<h3>' + lista[i].title + '</h3>';
    html += lista[i].body + '<br>';
    html += '<hr>';
  }

  document.getElementById('posts').innerHTML = html;
}