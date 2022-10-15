<?php 
  $array = ['Jose', 28, 'café', 'azul'];

  /* cria variáveis baseado no array */
  list($nome, $idade, $bebida, $cor) = $array;

  echo $nome." tem ".$idade." anos, e gosta de beber ".$bebida." da cor ".$cor;
?>