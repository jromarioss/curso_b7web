let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];
fruits.reverse(); // ordena o array em DESC e altera o array
fruits.sort(); // ordena o array e altera o array

let cars = [
  { brand: 'Fiat', year: 2022 },
  { brand: 'BMW', year: 2018 },
  { brand: 'Ferrari', year: 2020 },
];

cars.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else if(a.year < b.year) {
    return -1;
  }return 0
});

/* 
  { brand: 'BMW', year: 2018 },
  { brand: 'Ferrari', year: 2020 },
  { brand: 'Fiat', year: 2022 }
*/