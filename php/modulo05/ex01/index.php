<?php 
  $array = [
    // Keys =  Values
    'nome' => 'Jose',
    'idade' => 28,
    'empresa' => 'Borgstena',
    'cor' => 'Cinza',
    'profissao' => 'Cortador',
  ];
?>
<table border="1">
  <?php foreach($array as $chave => $valor): ?>
    <tr>
      <th><?php echo $chave;?></th>
      <td><?php echo $valor;?></td>
    </tr>
  <?php endforeach ?>
</table>