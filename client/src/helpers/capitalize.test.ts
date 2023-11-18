import { capitalize } from '.';

describe('capitalize ', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('test')).toBe('Test');
  });

  it('returns an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('doesnt change a string that had already capitalized', () => {
    expect(capitalize('Test')).toBe('Test');
  });
});
