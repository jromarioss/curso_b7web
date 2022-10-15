<?php 
  $array = [
    // chave =  valor
    'nome' => 'Jose',
    'idade' => 28,
    'empresa' => 'Borgstena',
    'cor' => 'Cinza',
    'profissao' => 'Cortador',
  ];

  // array_key_exists nome da função original
  if (key_exists('age', $array)) { // 1 oque está procurando 2 onde
    $idade = $array['idade'];
    echo $idade." anos";
  } else {
    echo "Não tem idade";
  }
?>