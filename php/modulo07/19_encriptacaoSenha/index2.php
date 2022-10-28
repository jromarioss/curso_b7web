<?php
  $hash = '$2y$10$al69M5d6ssXuAQveuXGmNupjUmfctds2bJH4eeXyo5cGtZJHT1ezm';
  $senha = '12234';

  if(password_verify($senha, $hash)) {
    echo "Senha correta!";
  } else {
    echo "Senha errada";
  }

  /* if(md5($senha) == $hash) */