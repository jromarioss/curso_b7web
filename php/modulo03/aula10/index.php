<!-- Função nativa de string -->

<?php
  $nomeCompleto = "jose romario";

  $posicao = strpos($nomeCompleto, 'b'); // retorna a posição da string
  if ($posicao > -1) { // se posição for maio que -1 achou
    echo "Achou <br/>";
  } else {
    echo "Não Achou <br/>";
  }

  echo ucfirst($nomeCompleto)."<br/>"; // transforma a primeira letra maiúscula
  echo ucwords($nomeCompleto)."<br/>"; // transforma as primeiras letras maiúscula

  $nomes = explode(' ', $nomeCompleto); // coloca cada nome num array, 1 = pega espaço, 2 = variável
  echo print_r($nomes)."<br/>";

  $numero = 12012.32;
  echo number_format($numero, 1, ',', '.')."<br/>"; // formatar número 1= variável, 2= qtd de decimal 3= opcional o caractere separador de decimal
  // 4= o caractere para separar o milhares
  
?>