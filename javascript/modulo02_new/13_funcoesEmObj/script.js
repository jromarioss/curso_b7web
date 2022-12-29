let person = {
  name: 'Maria',
  lastName: 'Santos',
  age: 32,
  fullName: function() {
    return this.name + ' ' + this.lastName;
  },
}

console.log(person.fullName());