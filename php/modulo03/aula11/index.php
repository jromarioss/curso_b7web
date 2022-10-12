<!-- Função nativa de array -->

<?php
  $lista = ['jose', 'miguel', 'paulo', 'giovana', 'carlos'];
  $aprovados = ['miguel', 'giovana'];

  echo "Total: ".count($lista)."<br/>"; // contas quantos item tem no array

  $reprovados = array_diff($lista, $aprovados); // retorna quem não ta na lista 2
  print_r($reprovados);
  echo "<br/>";

  $numeros = [10, 20, 45, 23, 43, 11, 8, 99];

  $filtrados = array_filter($numeros, function($item) {
    if ($item < 30) {
      return true;
    } else {
      return false;
    }
  }); // 1 o array, 2 uma função e retorna uma nova array com items filtrado
  print_r($filtrados);
  echo "<br/>";

  $dobrados = array_map(function($item) { // altera a array e retorna
    return $item * 2;
  }, $numeros);

  print_r($dobrados);
?>