<?php 
  $array = ['a', 'b', 'c', 'd', 'e', 'f'];

  /* corta o array original e modifica ela */
  /* 1 o array, 2 por onde começa o corte, 3 remove quantos, 4 adiciona item na posição do deletado */
  array_splice($array, 1, 2, ['k', 'j']); // -1 o último

  print_r($array);
?>