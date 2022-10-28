<?php
  require 'config.php';

  $name = filter_input(INPUT_POST, 'name');
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  if ($name && $email) { // tem nome e e-mail
    $sql = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email"); // prepare mais seguro
    $sql->bindValue(':email', $email);
    $sql->execute();

    if ($sql->rowCount() === 0) { // quer dizer que não tem o email
      // evitando vunerabilidade
      $sql = $pdo->prepare("INSERT INTO usuarios (nome, email) VALUE (:name, :email)"); // montado template
      $sql->bindValue(':name', $name); // pega valor de name e joga em $name ñ pode trocar
      $sql->bindValue(':email', $email); // pega valor de name e joga em $name ñ pode trocar
      //$sql->bindParam(':email', $email); associa o proprio parametro pode troca o valor
      $sql->execute();

      header("Location: index.php");
      exit;
    } else { // já tem o email igual
      header("Location: adicionar.php");
    exit;
    }

  } else { // se não informar os dados manda pra adicionar
    header("Location: adicionar.php");
    exit;
  }
?>