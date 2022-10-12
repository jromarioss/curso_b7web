<!-- Funções parâmetros e includes -->

<?php
   function somar($n1, $n2, &$total) { // & recebe a variável como referência do parâmetro e altera a variável global
    $total = $n1 + $n2;
    return $total;
  }

  $x = 10;
  $y = 2;
  $soma = 0;

  somar($x, $y, $soma);

  echo "Total: ".$soma;
?>