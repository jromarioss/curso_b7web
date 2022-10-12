<!-- Parâmetros de Funções -->

<?php
  function somar($n1, $n2) { //n1 e n2 são os parâmetros
    $total = $n1 + $n2;
    return $total; // return é a saída da função e ele retorna o total.
  }

  $soma = somar(10, 20);
  echo "Total: ".$soma;
?>