<!-- Funções anônimas -->

<?php
  $dizimo = function(int $valor) { // função sem nome
    return $valor * 0.1;
  };

  echo "10% do seu dizimo é: R$ ".$dizimo(1160);
?>