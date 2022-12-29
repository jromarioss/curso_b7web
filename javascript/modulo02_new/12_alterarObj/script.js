let person = {
  name: 'José',
  age: 20,
  country: 'Brasil',
  hair: ['black', 'red'],
  powers: {
    strength : 20,
    magic: 5,
    stamina: 15
  }
}

person.name = 'Maria'; // redefine o nome José para Maria
person.powers.stamina -= 5; // stamina 10
person.hair.push('blue'); // ['black', 'red', 'blue'];

console.log(person.hair);

let person2 = {
  name: 'Pedro',
  age: 32,
  cars: [
    { model: 'BMW', color: 'blue'},
    { model: 'Ferrari', color: 'red'},
    { model: 'Porsh', color: 'white'},
  ]
}

console.log(person.cars[1].color);