<!-- Orientação a Objetos -->

<?php
  class Post {
    private int $id;
    private int $like = 0;

    public function setId($i) {
      $this->id = $i;
    }

    public function getId() {
      return $this->id;
    }

    public function setLike($l) {
      $this->like = $l;
    }

    public function getLike() {
      return $this->like;
    }
  }

  class Foto extends Post{ // usa tudo que tem na classe POST HERDA
    private $url;

    public function __construct($id) {
      $this->setId($id);
    }

    public function setUrl($u) {
      $this->url = $u;
    }

    public function getUrl() {
      return $this->url;
    }
  }

  $foto = new Foto(20);
  $foto->setLike(12);
  $foto->setUrl('main/foto.jpg');

  echo "FOTO: #".$foto->getId()." - ".$foto->getLike()." likes url: //".$foto->getUrl();
?>