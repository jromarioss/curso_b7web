<?php $render('header'); ?>

<hr/>
Opa, <?=$nome;?> <?=$sobrenome;?> você tem <?=$idade;?> anos.

<hr/>
<?php foreach($posts as $post): ?>
  <h3><?php echo $post['titulo']; ?></h3>
  <p><?php echo $post['corpo']; ?></p>
<?php endforeach; ?>