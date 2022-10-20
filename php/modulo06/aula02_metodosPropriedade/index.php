<!-- Orientação a Objetos -->

<?php
  class Post { // classe
    // public pode acessa de fora e alterar
    // private para proteger a classe
    // protected classe protegida
    public $likes = 0;
    public $comments = [];
    public $author;

    public function aumentarLike() {
      $this->likes++; // this para acessar variável da classe
    }
  }

  $post1 = new Post(); // criar Objeto
  $post1->aumentarLike(); // definir like ao objeto

  $post2 = new Post();
  $post2->likes = 10;

  echo "POST 1: ".$post1->likes."<br/>";
  echo "POST 2: ".$post2->likes."<br/>";
?>