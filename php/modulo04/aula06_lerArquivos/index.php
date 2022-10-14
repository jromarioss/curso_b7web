<?php
  $texto = file_get_contents('texto.txt'); // ler arquivos
  $texto = explode("\n", $texto);

  echo "Paragrafos: ".count($texto);
?>