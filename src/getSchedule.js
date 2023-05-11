const zooData = require('../data/zoo_data');

const animal = (animalName, data) => data.species
  .some((specie) => specie.name === animalName);

const weekDay = (dayName, data) => Object.keys(data.hours)
  .some((weekday) => weekday === dayName);

const getScheduleForAnimal = (animalName, data) => data.species
  .find((element) => element.name === animalName).availability;

const getScheduleForWeekDay = (dayName, data) => ({
  [dayName]: {
    officeHour: (data.hours[dayName].close === 0)
      ? 'CLOSED'
      : `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close}pm`,
    exhibition: (data.hours[dayName].close === 0)
      ? 'The zoo will be closed!'
      : data.species.filter((specie) => specie.availability
        .includes(dayName)).map((specie) => specie.name),
  },
});

const getScheduleForWeek = (_, data) => {
  let acc = {};
  Object.keys(data.hours).forEach((dayName) => {
    acc = { ...acc, ...getScheduleForWeekDay(dayName, data) };
  });
  return acc;
};

const getSchedule = (target) => {
  if (target && animal(target, zooData)) {
    return getScheduleForAnimal(target, zooData);
  }
  if (target && weekDay(target, zooData)) {
    return getScheduleForWeekDay(target, zooData);
  }
  return getScheduleForWeek(target, zooData);
};

module.exports = getSchedule;
