function subirTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
let btn = document.querySelector('#btnScroll');
btn.addEventListener('click', subirTop);