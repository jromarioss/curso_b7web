<?php
  require 'matematica.php';

  $nome = 'José';
  
  echo "Resultado: ";

  $m = new Matematica();

  echo $m->somar(10, 20);
?>

<?php echo $nome ?>
<br/>
<!-- é a mesma coisa que o de baixo -->
<?= $nome ?>
<br/>

