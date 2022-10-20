<!-- Orientação a Objetos -->
<!-- Tipar propriedades da classe -->

<?php
  class Post { // classe
    // public pode acessa de fora e alterar
    // private para proteger a classe
    // protected classe protegida
    public int $likes = 0; // tipa a propriedade
    public array $comments = [];
    private string $author; // com set pode privar as propriedades
    
    public function aumentarLike() {
      $this->likes++; // this para acessar variável da classe
    }

    public function setAuthor($name) {
      if (strlen($name) >= 3) { // ter mais de 3 caracteres
        $this->author = ucfirst($name);
      }
    }

    public function getAuthor() {
      return $this->author ?? 'Visitante'; // se tiver autor passa se não manda visitante
    }
  }

  $post1 = new Post();
  // tem a posibilidade de poder tratar essa informação
  $post1->setAuthor('ad');
  //$post1->author = "José";
  
  $post2 = new Post();
  $post2->setAuthor('giovana');
  //$post2->author = "Giovana";

  echo "POST 1: ".$post1->likes." likes - ".$post1->getAuthor()."<br/>";
  echo "POST 2: ".$post2->likes." likes - ".$post2->getAuthor()."<br/>";
?>