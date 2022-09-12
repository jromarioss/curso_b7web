
let html = ''

let c = 1;
while (c <= 10) {
  html += "Número: " + c + "<br>";
  c++;
}

document.getElementById('demo').innerHTML = html;