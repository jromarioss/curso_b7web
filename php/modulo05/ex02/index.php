<?php 
  $array = [
    // Keys =  Values
    'nome' => 'Jose',
    'idade' => 28,
    'empresa' => 'Borgstena',
    'cor' => 'Cinza',
    'profissao' => 'Cortador',
  ];
  
  $chaves = array_keys($array);
  $valores = array_values($array);
?>

<table border="1">
  <tr>
    <?php foreach($chaves as $chaves): ?>
      <th><?php echo $chaves;?></th>
    <?php endforeach ?>
  </tr>
  <tr>
    <?php foreach($valores as $valores): ?>
      <td><?php echo $valores;?></td>
    <?php endforeach ?>
  </tr>
</table>