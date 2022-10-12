<!-- Função recursivas, função que executa ela mesma -->

<?php
  function dividir($numero) {
    $metade = $numero / 2;
    echo $metade."<br/>";

    if (round($metade) > 0) { // round arredonda para baixo
      dividir($metade);
    }
  }

  dividir(100);
?>