<!-- Orientação a Objetos -->
<!-- Tipar propriedades da classe -->

<?php
  class Post { // classe
    // public pode acessa de fora e alterar
    // private para proteger a classe
    // protected classe protegida
    public int $likes = 0; // tipa a propriedade
    public array $comments = [];
    public string $author;

    // criando um construtor esexuta toda vez que cria um obj novo
    public function __construct($qtLikes = 0) { // inicia com 0 qtlikes
      $this->likes = $qtLikes; // define likes a qtLikes
    }
    
    public function aumentarLike() {
      echo "abs";
      $this->likes++; // this para acessar variável da classe
    }
  }

  $post1 = new Post(25); // criar Objeto ja com likes
  $post2 = new Post();

  echo "POST 1: ".$post1->likes."<br/>";
  echo "POST 2: ".$post2->likes."<br/>";
?>