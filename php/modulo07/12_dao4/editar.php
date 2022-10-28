<?php
  require 'config.php';
  require 'dao/UsuarioDAOMySQL.php';

  $usuarioDao = new UsuarioDaoMysql($pdo); // instância a classe usuário

  $usuario = false;

  $id = filter_input(INPUT_GET, 'id');

  if ($id) {
    $usuario = $usuarioDao->findById($id);
  }
  if($usuario === false) {
    header("Location: index.php");
    exit;
  }
?>

<h1>Editar Usuário</h1>

<form method="POST" action="editar_action.php">
  <input type="hidden" name="id" value="<?=$usuario->getId();?>" /> <!-- manda o id oculto -->

  <label>
    Nome: <br/>
    <input type="text" name="name" value="<?=$usuario->getNome();?>" />
  </label><br/>

  <label>
    email: <br/>
    <input type="email" name="email" value="<?=$usuario->getEmail();?>" />
  </label><br/><br/>

  <input type="submit" value="Salvar" />
</form>