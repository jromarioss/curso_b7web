<!-- Função nativa de string -->

<?php
  $nome = "    José Romário Soares   ";
  $nomelimpo = trim($nome); // corrigir os espaçamento extra
  echo $nomelimpo."<br/>";
  echo strlen($nomelimpo)."<br/>"; // contas quantos caractere tem a string

  $nome2 = "José Romário";
  echo strtolower($nome2)."<br/>"; // converter para minúsculo
  echo strtoupper($nome2)."<br/>"; // converter para maiúsculo

  $nomeAlterado = str_replace('José', 'lindo', $nome2); // alterar um string 1 = 'procura', 2 = 'alterar', 3 = 'variável'
  echo $nomeAlterado."<br/>";

  $nomeCompleto = "RomarioSantos";
  $nome3 = substr($nomeCompleto, 0, 5); // comea do 0 e pega 5 caracteres, valor negativo começa da direita para esquerda
  echo $nome3."<br/>"; // pega do 0 até o 5
?>