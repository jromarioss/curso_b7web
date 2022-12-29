let colors = ['black', 'red', 'blue', 'white', 'purple'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let i in colors) {
  console.log(colors[i]);
}

let person = [
  { name: 'Jose', age: 20},
  { name: 'Pedro', age: 43},
  { name: 'Maria', age: 21},
]

for (let people of person) {
  console.log(people.age);
}