<?php
  require 'calculadora.php';

  $calc = new Calculadora();
  $calc->add(12);
  $calc->add(2);
  $calc->sub(1);
  $calc->mult(3);
  $calc->div(2);
  $calc->add(0.5);

  echo "Total: ".$calc->total()."<br/>";
  $calc->clear();

  echo "Total: ".$calc->total();
?>