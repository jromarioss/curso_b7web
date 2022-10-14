<!-- Cookie no php -->

<?php
  session_start(); // salvar na sessão

  require('./header.php');

  if ($_SESSION['aviso']) {
    echo $_SESSION['aviso'];
    $_SESSION['aviso'] = '';
  }
?>

<a href="./apagar.php">Apagar Cookie</a>
<!-- Post envia internamente, GET envia pelo URL -->
<form method="POST" action="recebedor.php"> <!-- action para onde os arquivo sera enviado, sem o action envia para o próprio arquivo -->
  <label for="name">
    Nome:
  </label>
  <input type="text" name="name" id="name">
  <br/>
  <br/>

  <label for="email">
    E-mail:
  </label>
  <input type="text" name="email" id="email">
  <br/>
  <br/>

  <label for="age">
    Idade:
  </label>
  <input type="text" name="age" id="age">
  <br/>
  <br/>
  <input type="submit" value="enviar" />
</form>