<?php
  require 'vendor/autoload.php';

  use \classes\matematica\Basica;
  use Monolog\Logger;
  use Monolog\Handler\StreamHandler;

  $log = new Logger('name');
  $log->pushHandler(new StreamHandler('teste.log', Level::Warning));

  $m = new Basica();
  echo $m->somar(10, 10);

  $log->warning('Foo');
  $log->error('Bar');
?>

<!-- $ composer dump-autoload -->