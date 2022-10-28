<?php

  $hoje = new DateTime();
  $end = new DateTime('2022-12-31');

  $diff = $hoje->diff($end);
  echo $diff->format('%a dias');
  // %m meses, %a dias, %d dias, $%y anos, %h horas, %m minutos, %s segundos

  // $date = new DateTime('2021-01-01');
  // $date2 = new DateTime('2021-02-15');

  /* if($date > $date2) {
    echo "Date 1 e maior";
  } else {
    
    echo "Date 2 e maior";
  } */

  // $diff = $date->diff($date2);
  // echo $diff->format('%a'); // me da aquantidade total de dias entre um e outro
  
  
  // $date->add(DateInterval::createFromDateString('2 days 5 minutes'));
  // $date->setTimezone(new DateTimeZone('America/Sao_Paulo'));

  //echo $date->format('d/m/Y H:i:s');
?>