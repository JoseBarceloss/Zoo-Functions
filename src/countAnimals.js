const data = require('../data/zoo_data');

const countAnimals = ({ species = null, sex = null } = {}) => {
  if (species) {
    const speciesData = data.species.find((s) => s.name === species);
    if (!speciesData) return 0;

    if (sex) {
      const filteredResidents = speciesData.residents.filter((resident) => resident.sex === sex);
      return filteredResidents.length;
    }

    return speciesData.residents.length;
  }

  return data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
};

module.exports = countAnimals;
