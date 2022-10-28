<?php
  require 'config.php';
  require 'dao/UsuarioDAOMySQL.php';
 
   $usuarioDao = new UsuarioDaoMysql($pdo); // instância a classe usuário

  $id = filter_input(INPUT_POST, 'id');
  $name = filter_input(INPUT_POST, 'name');
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  if ($id && $name && $email) { // tem nome e e-mail e id
    $usuario = $usuarioDao->findById($id);
    $usuario = new Usuario();
    $usuario->setId($id);
    $usuario->setNome($name);
    $usuario->setEmail($email);

    $usuarioDao->update($usuario);

    header("Location: index.php");
    exit;
    
  } else { // se não informar os dados manda pra adicionar
    header("Location: editar.php?id=".$id);
    exit;
  }
?>