//for loop
//for array = for in

let carros = ['ferrari', 'fusca', 'palio', 'corolla', 'bmw'];
let texto = "";
let html = '<ul>'

/* for (let i = 0; i <= 50; i++) {
  texto = texto + i + '<br/>';
} */

// loop para array
for (let i in carros) {
  html += "<li>" + carros[i] + "</li>";
}

html += '</ul>';
document.getElementById('demo').innerHTML = html;