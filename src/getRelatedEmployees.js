const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;
  const relatedEmployees = employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
  return relatedEmployees;
};

module.exports = { isManager, getRelatedEmployees };
