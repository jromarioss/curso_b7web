function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(resultado) {
    return resultado.json();
  })
  .then(function(json) {
    document.getElementById('posts').innerHTML = json.length + " posts";
  })
  .catch(function(err) {
    console.log("Error: ", err);
  });
}