<!-- Orientação a Objetos -->

<!-- inserre um classe dentro de outra -->
<?php
  class Basico1 {
    public function somar($x, $y) {
      return $x + $y;
    }
  }

  class Basico2 {
    public function somar($x, $y) {
      $res = $x;
      for ($q = 0; $q < $y; $q++) {
        $res++;
      }
      return $res;
    }
  }

  class Matematica {
    private $basico;

    public function __construct($b) {
      $this->basico = $b;
    }

    public function somar($x, $y) {
      return $this->basico->somar($x, $y) ;
    }
  }

  $basico = new Basico2();
  
  $mat = new Matematica($basico);
  echo $mat->somar(10, 14);
?>