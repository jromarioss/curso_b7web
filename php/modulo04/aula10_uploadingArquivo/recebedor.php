<?php
  echo '<pre>';
  print_r($_FILES); // para ver o arquivo

  $nome = $_FILES['arquivo']['name'];
  move_uploaded_file($_FILES['arquivo']['tmp_name'], 'arquivos/'.$nome); // onde está o arquivo e 2 onde vc quer que ele salve o arquivo
?>