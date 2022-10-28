<?php
  $arquivo = 'naruto.jpg';
  $maxWidth = 250;
  $maxHeight = 250;

  list($oWidth, $oHeight) = getimagesize($arquivo);
  
  $ratio = $oWidth / $oHeight;
  $radioDest = $maxWidth / $maxHeight;

  $finalWidth = 0;
  $finalHeight = 0;

  if($radioDest > $ratio) {
    $finalWidth = $maxHeight * $ratio;
    $finalHeight = $maxHeight;
  } else {
    $finalHeight = $maxWidth / $ratio;
    $finalWidth = $maxWidth;
  }

  $image = imagecreatetruecolor($finalWidth, $finalHeight);
  $originalImg = imagecreatefromjpeg($arquivo);

  /* 1 imagem 2 copiar 3 4 5 6 posicao 7 widthfinal 8 heightfinal 9 widthoiginal 10 heightoriginal*/
  imagecopyresampled($image, $originalImg, 0, 0, 0, 0, $finalWidth, $finalHeight, $oWidth, $oHeight);

  header("Content-Type: image/jpeg");
  imagejpeg($image, null, 100);
  /* imagepng($image, null, 80); gera imagem png */
  /* salvar imagem em vez de nul coloca 'nova.jpg' */
?>