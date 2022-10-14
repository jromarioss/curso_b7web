<!-- INDEX -->
<form action="index.php" method="POST">
  <label for="nome">Novo Nome:</label><br/>
  <input type="text" name="name" id="nome" />
  <input type="submit" value="salvar" />
</form>

<h2>Lista de nomes</h2>
<ul>
  <?php
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);

    if ($name) {
      $newName = file_get_contents('name.txt');
      $newName .= "\n<li>".$name."</li>";
      echo $newName;
      file_put_contents('name.txt', $newName);
    } else {
      $newName = file_get_contents('name.txt', $name);
      echo $newName;
    }
  ?>
</ul>