<!-- Funções type e valor -->

<?php
   function somar(int $n1, int $n2, int $n3 = 5) { // n3 assume o valor 5, int define como inteiro
    $total = $n1 + $n2 + $n3;
    return $total;
  }

  $soma = somar(10, 20);
  $z = somar('José', 'Romário');

  echo "Total: ".$soma;
?>