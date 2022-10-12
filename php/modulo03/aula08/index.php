<!-- Função nativas de Matemática -->

<?php
  $numero = -8.4;
  echo abs($numero)."<br/>"; // pega valor absoluto o número positivo

  echo pi()."<br/>"; // pega o valor de PI

  $numero2 = 2.3;
  echo floor($numero2)."<br/>"; // arredonda pra baixo

  echo ceil($numero2)."<br/>"; // arredonda pra cima

  echo round($numero2)."<br/>"; // arredonda pra cima se for maior que 5 e para baixo menor que 5.
  //round($numero2, 3) se quiser 3 casas decimais

  $aleatorio = rand(1, 9); // número aleatório de 1 a 9
  echo $aleatorio."<br/>";

  $lista = [1, 4, 9, 8]; 
  echo max($lista)."<br/>"; // pegar o maior número da lista
  echo min($lista)."<br/>"; // pegar o menor número da lista
?>