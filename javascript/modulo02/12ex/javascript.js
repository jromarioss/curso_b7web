function subirTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
let btn = document.querySelector('#btnScroll');
btn.addEventListener('click', subirTop);

function decidirBotao() {
  if (window.scrollY <= 200) {
    document.querySelector('.scrollButton').style.display = 'none';
  } else {
    document.querySelector('.scrollButton').style.display = 'block';
  }
}

window.addEventListener('scroll', decidirBotao);
// setInterval(decidirBotao, 1000);