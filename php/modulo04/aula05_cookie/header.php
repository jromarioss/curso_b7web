<h1>Cabeçalho</h1>
<?php
  if(isset($_COOKIE['nome'])) { // se existe o cookie
    $nome = $_COOKIE['nome'];
    echo "<h2>".$nome."</h2>";
  }
?>
<hr/>