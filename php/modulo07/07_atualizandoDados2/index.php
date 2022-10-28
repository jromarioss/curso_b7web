<?php
  require 'config.php';
  /* 
    CRUD
    C = Create
    R = Read
    U = Update
    D = Delete
  */
  $lista = [];
  $sql = $pdo->query("SELECT * FROM usuarios"); // pega todos usuário

  if ($sql->rowCount() > 0) {
    $lista = $sql->fetchAll(PDO::FETCH_ASSOC); // pega os dados e joga no array lista
  }
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
      <td><?php echo $usuario['id']; ?></td>
      <td><?php echo $usuario['nome']; ?></td>
      <td><?php echo $usuario['email']; ?></td>
      <td>
        <a href="editar.php?id=<?php echo $usuario['id']; ?>">[ Editar ]</a>
        <a href="excluir.php?id=<?php echo $usuario['id']; ?>">[ Excluir ]</a>
      </td>
    </tr>
  <?php endforeach; ?>
</table>