let names = ['jose', 'mario', 'santos', 'paulo', 'cris', 90];

names.forEach(function(nome) {
  if (typeof nome === 'string') {
    console.log(nome.toLocaleUpperCase);
  } else {
    console.log(nome)
  }
});