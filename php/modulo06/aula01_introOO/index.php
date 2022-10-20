<!-- Orientação a Objetos -->

<?php
  class Post { // classe
    public $likes = 0;
    public $comments = [];
    public $author;
  }

  $post1 = new Post(); // criar Objeto
  $post1->likes = 3; // definir like ao objeto

  $post2 = new Post();
  $post2->likes = 10;

  echo "POST 1: ".$post1->likes."<br/>";
  echo "POST 2: ".$post2->likes."<br/>";
?>