/* function digitou() {
  console.log("Você digitou");
} */

function digitou(e) {
  let output = document.getElementById('output');
  if (e.keyCode === 13) {
    let txt = document.getElementById('campo').value;
    output.innerHTML = txt;
  }
}