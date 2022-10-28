<?php
  require 'config.php';

  $id = filter_input(INPUT_POST, 'id');
  $name = filter_input(INPUT_POST, 'name');
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  if ($id && $name && $email) { // tem nome e e-mail e id
    // UPDATE usuarios SET name = '..', email = '...' WHERE id - '...'
    $sql = $pdo->prepare("UPDATE usuarios SET nome = :name, email = :email WHERE id = :id");
    $sql->bindValue(':name', $name); // troca o nome
    $sql->bindValue(':email', $email); // troca o email
    $sql->bindValue(':id', $id); // troca o id
    $sql->execute();

    header("Location: index.php");
    exit;
    
  } else { // se não informar os dados manda pra adicionar
    header("Location: adicionar.php");
    exit;
  }
?>