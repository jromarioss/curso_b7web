<?php 
  $array = ['a', 'b', 'c', 'd', 'e', 'f'];

  /* corts o array original e cria uma cópia */
  /* 1 o array, 2 por onde começa o corte, 3 quantos item querem pegar, o resto recorta */
  $retorno = array_slice($array, 0, 2); // -1 o último

  print_r($retorno);
?>