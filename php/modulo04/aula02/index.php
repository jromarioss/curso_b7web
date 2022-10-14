<?php
  require('./header.php');
?>

<!-- Post envia internamente, GET envia pelo URL -->
<form method="POST" action="recebedor.php"> <!-- action para onde os arquivo sera enviado, sem o action envia para o próprio arquivo -->
  <label for="name">
    Nome:
  </label>
  <input type="text" name="name" id="name">
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