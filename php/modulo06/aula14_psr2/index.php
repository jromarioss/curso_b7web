<?php
  require 'matematica.php';
  
  echo "Resultado: ";

  $m = new MatematicaBasica();
  echo $m->somar(10, 20);
  echo " - Versão: ".MatematicaBasica::VERSION;
?>