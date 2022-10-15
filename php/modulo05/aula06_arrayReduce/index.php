<?php 
  $numeros = [1, 2, 3, 4, 5];

  /* reduz todo array a um item só */
  
  /* 1 acumulador começa com 0, 2 item*/
  function somar($subtotal, $item) {
    $subtotal += $item;

    return $subtotal;
  }
  
  /* 1 o array, 2 o nome d afunção, 3 a definição do valor inícial do acc */
  $total = array_reduce($numeros, 'somar');
  
  echo $total;
  echo "<br/>";

  $pessoas = [
    ['nome' => 'Jose', 'sexo' => 'M', 'nota' => 9],
    ['nome' => 'Maria', 'sexo' => 'F', 'nota' => 7],
    ['nome' => 'Felipe', 'sexo' => 'M', 'nota' => 10],
    ['nome' => 'Gih', 'sexo' => 'F', 'nota' => 8],
    ['nome' => 'Miguel', 'sexo' => 'M', 'nota' => 9],
    ['nome' => 'Pedro', 'sexo' => 'M', 'nota' => 9],
  ];
  
  function contarM($acc, $item) {
    if ($item['sexo'] === 'M') { // sexo igual M
      $acc++; // soma 1 no M
    }

    return $acc;
  }

  function somaM($acc, $item) {
    if ($item['sexo'] === 'M') {
      $acc += $item['nota'];
    }

    return $acc;
  }

  $totalM = array_reduce($pessoas, 'contarM');
  $somaM = array_reduce($pessoas, 'somaM');
  $mediaM = $somaM / $totalM;

  echo "Total de Homens: ".$totalM;
  echo "<br/>";
  echo "Total de notas dos Homens: ".$somaM." e a média é: ".$mediaM;
?>