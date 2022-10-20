<!-- Orientação a Objetos -->

<?php
  class Post {
    /* protected pode alterar na class herdada */
    protected int $id;
    /* só pode ser alterada pela classe que a criou */
    private int $like = 0;

    protected function setId($i) {
      $this->id = $i;
    }

    public function getId() {
      return $this->id;
    }

    protected function setLike($l) {
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
      $this->setLike(20);
    }

    public function setUrl($u) {
      $this->url = $u;
    }

    public function getUrl() {
      return $this->url;
    }
  }

  $foto = new Foto(20);
  $foto->setUrl('main/foto.jpg');

  echo "FOTO: #".$foto->getId()." - ".$foto->getLike()." likes url: //".$foto->getUrl();
?>