<?php
  $image = imagecreatetruecolor(300, 300);

  /* mudar cor da imagem */
  $cor = imagecolorallocate($image, 255, 0, 0);

  /* preencher a imagem 1 imagem 2 left 3 top 4 color */
  imagefill($image, 0, 0, $cor);

  /* exibir na tela */
  header("Content-Type: image/jpeg");

  imagejpeg($image, null, 80);
  /* imagepng($image, null, 80); gera imagem png */
  /* salvar imagem em vez de nul coloca 'nova.jpg' */
?>