const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  if (!employee) {
    return {};
  }
  const { id, firstName, lastName, managers, responsibleFor } = employee;

  return { id, firstName, lastName, managers, responsibleFor };
};

module.exports = getEmployeeByName;
