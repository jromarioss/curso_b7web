<!-- Função nativa de array 2 -->

<?php
  $numeros = [10, 20, 30, 43, 23, 90];

  //array_pop($numeros); // remove o último item do array
  //array_shift($numeros); // remove o primeiro item do array
  //print_r($numeros);
  echo "<br/>";

  if (in_array(90, $numeros)) { // 1 verifica se tem o valor, 2 o array e retorna
    echo "Existe";
  } else {
    echo "Não existe";
  }
  echo "<br/>";

  $pos = array_search(43, $numeros); // 1 verifica se tem o valor, 2 o array e retorna a posição se nao acha retorna false
  echo $pos;
  echo "<br/>";

  sort($numeros); // ordenar a array em ordem crescente
  rsort($numeros); // ordenar a array em ordem decrescente
  asort($numeros); // ordenar a array em ordem crescente e mantem a chave
  arsort($numeros); // ordenar a array em ordem decrescente e mantem a chave
  print_r($numeros);
  echo "<br/>";
  $nomes = ['Jose', 'romarios', 'santos'];
  $nome = implode(' ', $nomes); // transforma a array em string e o espaço separa cada um
  echo($nome);
?>
