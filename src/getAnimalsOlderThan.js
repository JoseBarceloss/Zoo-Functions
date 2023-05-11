const data = require('../data/zoo_data');

const getAnimalsOlderThan = (species, age) => {
  const animals = data.species.find((animal) => animal.name === species).residents;

  return animals.every((animal) => animal.age >= age);
};

module.exports = getAnimalsOlderThan;
