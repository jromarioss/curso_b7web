function toTop() {
  window.scrollTo(0, 0);
}
let btn2 = document.getElementById('scrollButton');
btn2.addEventListener("click", toTop);

function positionBtn() {
  if (window.scrollY === 0) {
    document.getElementById('scrollButton').style.display = 'none';
  } else {
    document.getElementById('scrollButton').style.display = 'block';
  }
}
let btn = document.getElementById('scrollButton');
btn.addEventListener("scroll", positionBtn);