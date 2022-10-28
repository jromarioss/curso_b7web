<?php
  require 'config.php';
  require 'dao/UsuarioDAOMySQL.php';

  $usuarioDao = new UsuarioDaoMysql($pdo); // instância a classe usuário

  $name = filter_input(INPUT_POST, 'name');
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  if ($name && $email) { // tem nome e e-mail

    if ($usuarioDao->findByEmail($email) === false) {
      $novoUsuario = new Usuario();
      $novoUsuario->setNome($name);
      $novoUsuario->setEmail($email);

      $usuarioDao->add($novoUsuario); // retorna o obj completo

      header("Location: index.php");
      exit;
    } else {
      header("Location: adicionar.php");
      exit;
    }
  } else { // se não informar os dados manda pra adicionar
    header("Location: adicionar.php");
    exit;
  }
?>