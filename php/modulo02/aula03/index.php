<!-- Condicional NULL CAO-->

<?php
  $nome = "Romário ";
  $sobrenome = "Santos";

  $nomeCompleto = $nome;
  $nomeCompleto .= isset($sobrenome) ? $sobrenome : ''; // isset se está setado.
  // se a variável existir use ela mesma, se não vai para outra condição
  $nomeCompleto .= $sobrenome ?? '';

  echo $nomeCompleto;
?>