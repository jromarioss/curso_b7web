<?php
  require 'config.php';
  require 'dao/UsuarioDAOMySQL.php';

  $usuarioDao = new UsuarioDaoMysql($pdo); // instância a classe usuário

  $id = filter_input(INPUT_GET, 'id');

  if ($id) {
    $usuarioDao->delete($id);
  }

  header("Location: index.php");
  exit; 
?>