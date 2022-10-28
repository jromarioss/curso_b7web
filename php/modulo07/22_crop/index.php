<?php
  $arquivo = 'naruto.jpg';
  $width = 250;
  $height = 250;

  list($oWidth, $oHeight) = getimagesize($arquivo);
  
  $ratio = $oWidth / $oHeight;
  $radioDest = $width / $height;

  $finalWidth = 0;
  $finalHeight = 0;
  $finalX = 0;
  $finalY = 0;

  if($radioDest > $ratio) {
    $finalWidth = $height * $ratio;
    $finalHeight = $height;
  } else {
    $finalHeight = $width / $ratio;
    $finalWidth = $width;
  }

  if($finalWidth < $width) {
    $finalWidth = $width;
    $finalHeight = $width / $ratio;

    $finalY = -(($finalHeight - $height) / 2);
  } else {
    $finalHeight = $height;
    $finalWidth = $height * $ratio;

    $finalX = -(($finalWidth - $width) / 2);
  }

  $image = imagecreatetruecolor($width, $height);
  $originalImg = imagecreatefromjpeg($arquivo);

  /* 1 imagem 2 copiar 3 4 5 6 posicao 7 widthfinal 8 heightfinal 9 widthoiginal 10 heightoriginal*/
  imagecopyresampled($image, $originalImg, $finalX, $finalY, 0, 0, $finalWidth, $finalHeight, $oWidth, $oHeight);

  header("Content-Type: image/jpeg");
  imagejpeg($image, null, 100);
?>