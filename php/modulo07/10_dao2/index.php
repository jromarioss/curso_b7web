<?php
  require 'config.php';
  require 'dao/UsuarioDAOMySQL.php';

  $usuarioDao = new UsuarioDaoMysql($pdo); // instância a classe usuário
  $lista = $usuarioDao->findAll();
?>

<a href="adicionar.php">Adicionar usuários</a>

<table border="1" width="850px">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Ações</th>
  </tr>
  <?php foreach($lista as $usuario): ?> <!-- Faz um loop na lista -->
    <tr>
      <td><?=$usuario->getId();?></td>
      <td><?=$usuario->getNome();?></td>
      <td><?=$usuario->getEmail();?></td>
      <td>
        <a href="editar.php?id=<?=$usuario->getId();?>">[ Editar ]</a>
        <a href="excluir.php?id=<?=$usuario->getId();?>" onclick="return confirm('Deseja excluir?')">[ Excluir ]</a>
      </td>
    </tr>
  <?php endforeach; ?>
</table>