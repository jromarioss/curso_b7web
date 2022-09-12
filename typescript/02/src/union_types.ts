/* let idade: string | number = 90;
idade = document.getElementById('idade').innerHTML; */

function mostIdade(idade: string | number) {
  if (typeof idade == 'string') {
    console.log(idade.toUpperCase());
  } else {
    console.log('Minha idade é: ' + idade);
  }
}

mostIdade(90);
mostIdade("90");