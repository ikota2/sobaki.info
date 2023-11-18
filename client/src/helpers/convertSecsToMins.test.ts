import { convertSecsToMins } from './convertSecsToMins';

describe('convertSecsToMins', () => {
  it('formats seconds correctly when less than 60', () => {
    expect(convertSecsToMins(30)).toBe('30 сек.');
    expect(convertSecsToMins(59)).toBe('59 сек.');
  });

  it('formats 60 seconds as 1 мин.', () => {
    expect(convertSecsToMins(60)).toBe('1 мин.');
  });

  it('correctly converts more than 60 seconds to minutes', () => {
    expect(convertSecsToMins(120)).toBe('2 мин.');
    expect(convertSecsToMins(150)).toBe('2 мин.');
    expect(convertSecsToMins(3599)).toBe('59 мин.');
  });
});
