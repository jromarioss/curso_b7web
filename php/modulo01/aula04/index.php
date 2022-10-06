<!-- Mesclar variáveis -->

<?php
  $nome = "José";
  $sobrenome = "Santos";

  // comcatenação o ponto junta uma variável com a outra
  $nomeCompleto = $nome." ".$sobrenome; // ." ". para dar espaço ou "$nome $sobrenome"
  // string com aspas simples é um texto literal um string mesmo
  echo $nomeCompleto;

  $idade = 90;
  $frase = "$nome tem $idade anos.";
  echo $frase;

  $nome .= $sobrenome; // .= comcatena
  echo $nome;
?>