function pegarTemperatura() {
  return new Promise(function(resolve, reject) {
    console.log("pegando temperatura");

    setTimeout(function() {
      resolve("40 na sombra!");
    }, 30000);
  });
}

//usando promise
console.log("Código antes!");

let temp = pegarTemperatura();

console.log("Código Durante!");

temp.then(function(answer) {
  console.log("Temperatura: ", answer);
}).catch(function(error) {
  console.log("Deu Erro!", error);
});

console.log("Código depos!");