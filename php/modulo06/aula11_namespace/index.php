<!-- Orientação a Objetos -->

<?php
  require 'classe1.php';
  require 'classe2.php';
  require 'classes/matematica/basico.php';

  $a = new classe1\MinhaClasse();
  echo $a->testar();

  $b = new classe2\MinhaClasse();
  echo $b->testar();

  use classes\matematica\Basico as Basico; // usse esse cara como se fosse o nome Basico

  $basico = new Basico();
?>