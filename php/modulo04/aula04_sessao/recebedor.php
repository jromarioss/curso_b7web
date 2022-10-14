<!-- Validando informações -->

<?php
  session_start(); // salvar na sessão

  require('./header.php');

  $nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS); /* Pegar o valor do input 1 nome do tipo de envio, 2 nome do input, 3 não roda o código*/
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL); /* 3 pr validação do input */
  $idade = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_NUMBER_INT); /* sanitize pega somente números */

  $sobrenome = "Santos";
  filter_var($sobrenome);

  if($nome && $email && $idade) {
    echo "Nome: ".$nome."<br/>";
    echo "Nome: ".$email."<br/>";
    echo "Idade: ".$idade."<br/>";
  } else {
    $_SESSION['aviso'] = "Preencha os itens corretamente!"; // se não estiver preenchido

    header("Location: index.php"); /* troca o header, location para onde quer enviar */
    exit; /* cancela a execução */
  }

?>
<br/>
<a href="./index.php">Voltar</a>