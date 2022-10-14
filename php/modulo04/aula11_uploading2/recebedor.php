<?php
  echo '<pre>';
  print_r($_FILES); // para ver o arquivo

  // verificar que envie um arquivo específico
  $permitidos = ['image/jpeg', 'image/jpg', 'image/png'];

  if (in_array($_FILES['arquivo']['type'], $permitidos)) {
    $nome = md5(time().rand(0, 1000)).'.jpg'; // gerar nome aleatório
    move_uploaded_file($_FILES['arquivo']['tmp_name'], 'arquivos/'.$nome); // onde está o arquivo e 2 onde vc quer que ele salve o arquivo
    echo "Arquivo salvo com sucesso!";
  } else {
    echo "Arquivo não permitido!";
  }

?>