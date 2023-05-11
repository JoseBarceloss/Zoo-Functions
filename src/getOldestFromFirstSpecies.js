const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (Id) => {
  const employeeData = data.employees.find((employee) => employee.id === Id);
  const speciesData = data.species.find((species) => species.id === employeeData.responsibleFor[0]);
  const oldestAnimal = speciesData.residents.reduce((acc, animal) => {
    if (animal.age > acc.age) {
      return animal;
    }
    return acc;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
