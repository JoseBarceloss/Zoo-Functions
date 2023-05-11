const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids.length) {
    return [];
  }
  
  const species = data.species.filter((specie) => ids.includes(specie.id));
  
  return species;
};

module.exports = getSpeciesByIds;
