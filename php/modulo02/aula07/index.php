<!-- Loop Foreach trabalhar com arrays -->

<?php
  $ingredientes = ['acuçar', 'farinha', 'ovo', 'leite', 'fermento'];
  // indice 0 = chave, 'açucar' = valor
  echo "Items do array </br>";
  echo "<ul>";
  // faz um loop de array, array é o ingrediente pega o valor
  foreach ($ingredientes as $valor) {
    echo "<li>".$valor."</li>";
  }
  echo "</ul>";

  echo "<hr/>";

  echo "Items e chaves da array </br>";

  // pega a chave
  foreach ($ingredientes as $chave => $valor) {
    echo "Item ".( $chave + 1).": ".$valor."</br>";
  }
 
?>