<!-- Orientação a Objetos -->

<?php
  class Matematica {

    public static string $nome = "Romário<br/>";

    public static function somar($x, $y) { // torna a função estática
      return $x + $y;
    }
  }

  // referênciar a classe a qual essa função faz parte para usar ela, sem preciar criar com o Objeto
  echo Matematica::$nome;
  echo Matematica::somar(20, 30);
?>