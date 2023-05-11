const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { adult: 0, child: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age >= 50) {
      count.senior += 1;
    } else if (entrant.age >= 18) {
      count.adult += 1;
    } else {
      count.child += 1;
    }
  });

  return count;
};

const calculateEntry = (entrants = []) => {
  const counts = countEntrants(entrants);
  const adultPrice = 49.99;
  const childPrice = 20.99;
  const seniorPrice = 24.99;

  const total = counts.adult * adultPrice + counts.child * childPrice + counts.senior * seniorPrice;

  return Number(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
