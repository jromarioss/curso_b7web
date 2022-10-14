<?php 
  setcookie('nome', '', time() - 3600); // seta um tempo no passado

  header("Location: index.php"); // redireciona para o index
  exit;
?>