<?php 
  $array = [
    // Keys =  Values
    'nome' => 'Jose',
    'idade' => 28,
    'empresa' => 'Borgstena',
    'cor' => 'Cinza',
    'profissao' => 'Cortador',
  ];

  $chaves = array_keys($array); // gera um segundo array com apenas as keys
  print_r($chaves);
  echo "<br/>";

  $values = array_values($array); // gera um segundo array com apenas os values
  print_r($values);
?>