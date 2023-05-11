const getOpeningHours = require('../src/getOpeningHours');

const CLOSED_MESSAGE = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('should return the opening hours for a given day and time', () => {
    const result = getOpeningHours('Monday', '10:00-PM');
    expect(result).toBe(CLOSED_MESSAGE);
  });

  it('should throw an error if the day is invalid', () => {
    expect(() => getOpeningHours('InvalidDay', '10:00-PM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('should throw an error if the hour is invalid', () => {
    expect(() => getOpeningHours('Monday', '25:00-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('should throw an error if the minute is invalid', () => {
    expect(() => getOpeningHours('Monday', '12:70-PM')).toThrowError('The minutes must be between 0 and 59');
  });

  it('should throw an error if the abbreviation is invalid', () => {
    expect(() => getOpeningHours('Monday', '12:00-XX')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('should return "The zoo is closed" if the day is valid but the opening and closing times are empty', () => {
    const result = getOpeningHours('Sunday', '10:00-PM');
    expect(result).toBe(CLOSED_MESSAGE);
  });

  it('should return "The zoo is open" if the current time is within opening hours', () => {
    const result = getOpeningHours('Friday', '10:00-AM');
    expect(result).toBe('The zoo is open');
  });

  it('should return "The zoo is closed" if the current time is after closing hours', () => {
    const result = getOpeningHours('Thursday', '8:00-PM');
    expect(result).toBe(CLOSED_MESSAGE);
  });
});
