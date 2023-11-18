import dayjs from 'dayjs';
import { convertDateToHHmm } from '.';

describe('convertDateToHHmm ', () => {
  it('formats a valid date to HH:mm', () => {
    const date = new Date('2023-01-01T15:30:00');
    expect(convertDateToHHmm(date)).toBe(dayjs(date).format('HH:mm'));
  });

  it('returns "??" for an invalid date', () => {
    const invalidDate = new Date('Invalid Date');
    expect(convertDateToHHmm(invalidDate)).toBe('??');
  });
});
