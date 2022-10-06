<!-- Array Spread -->

<?php
  $ingredientes = ["açucar", "farinha", "ovo", "leite"];
  // repetir oque tem no bolo 1 e adicionar algo a mais
  $ingredientes2 = [...$ingredientes, "chocolate", "corante"];
  echo $ingredientes2[4]."</br>";

  $ingredientes3 = [...$ingredientes, ...$ingredientes2];
  print_r($ingredientes3); // print_r mostra toda a array na tela
?>