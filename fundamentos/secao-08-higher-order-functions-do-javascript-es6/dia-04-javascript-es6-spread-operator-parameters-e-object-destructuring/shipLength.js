const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
  // measurementUnit: unidade de medida
];

const shipLength = (ships) => 
  ships.map(({ name, length, measurementUnit })=> `${name} is ${length} ${measurementUnit} long`);

console.log(shipLength(ships)[0]);
console.log(shipLength(ships)[1]);
console.log(shipLength(ships)[2]);
