let btn = document.getElementById('button');
btn.addEventListener('click', function() {
  document.getElementById('titulo').innerHTML = "clicou no botão!";
});

let passMouse = document.getElementById('titulo');
passMouse.addEventListener('mouseover', function() {
  passMouse.classList.add('red');
});

let outMouse = document.getElementById('titulo');
outMouse.addEventListener('mouseout', function() {
  outMouse.classList.remove('red');
});