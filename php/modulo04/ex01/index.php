<!-- INDEX -->

<?php
  session_start();

  $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);

  if ($nome) {
    echo "<h2>Olá ".$nome."</h2>";
  } else {
    $_SESSION['name'] = "";
    header("Location: login.php");
  }
?>
<a href="./login.php">Sair</a>