<!-- LOGIN -->

<?php
  session_start();
?>

<h2>Qual o seu nome?</h2>
<form action="index.php" method="POST">
  <input type="text" name="nome" placeholder="Digite o seu nome" />
  <input type="submit" value="Salvar" />
</form>