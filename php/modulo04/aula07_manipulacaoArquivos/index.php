<?php
  $texto = "José romário é lindo";

  file_put_contents('nome.txt', $texto); // se n existir ele cria, se existir ele substitui criar arquivos

  $nome = file_get_contents('nome.txt');
  $nome .= "\n José Novo";

  file_put_contents('nome.txt', $nome);

  echo "Arquivo criado com sucesso: ";
?>