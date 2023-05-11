const zooData = require('../data/zoo_data');

const createEmployee = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: zooData.species.filter((specie) => employee.responsibleFor
    .includes(specie.id)).map((specie) => specie.name),
  locations: zooData.species.filter((specie) => employee.responsibleFor
    .includes(specie.id)).map((specie) => specie.location),
});

const getEmployeesCoverage = (parameter) => {
  const { employees } = zooData;
  const getEmployeeByNameOrLastName = (name) => employees.find((employee) =>
    employee.firstName === name || employee.lastName === name);
  const getEmployeeById = (id) => employees.find((employee) => employee.id === id);

  if (!parameter) {
    return employees.map((employee) => createEmployee(employee));
  }

  const foundEmployee = parameter.name
    ? getEmployeeByNameOrLastName(parameter.name)
    : getEmployeeById(parameter.id);

  if (!foundEmployee) {
    throw new Error('Informações inválidas');
  }

  return createEmployee(foundEmployee);
};

module.exports = getEmployeesCoverage;
