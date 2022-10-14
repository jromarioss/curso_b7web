<?php
  require('./header.php');

  $nome = filter_input(INPUT_POST, 'name'); /* Pegar o valor do input 1 nome do tipo de envio, 2 nome do input, 3 */
  $idade = filter_input(INPUT_POST, 'age');

  if($nome && $idade) {
    echo "Nome: ".$nome."<br/>";
    echo "Idade: ".$idade."<br/>";
  } else {
    header("Location: index.php"); /* troca o header, location para onde quer enviar */
    exit; /* cancela a execução */
  }

?>
<br/>
<a href="./index.php">Voltar</a>