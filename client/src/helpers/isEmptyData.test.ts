import isEmptyData from './isEmptyData';

describe('isEmptyData', () => {
  it('returns true for an empty array', () => {
    expect(isEmptyData([])).toBe(true);
  });

  it('returns false for a non-empty array', () => {
    expect(isEmptyData([1, 2, 3])).toBe(false);
  });

  it('returns true for an empty object', () => {
    expect(isEmptyData({})).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isEmptyData({ key: 'value' })).toBe(false);
  });

  it('returns true for various falsy values', () => {
    expect(isEmptyData(null)).toBe(true);
    expect(isEmptyData(undefined)).toBe(true);
    expect(isEmptyData('')).toBe(true);
  });

  it('returns false for truthy values', () => {
    expect(isEmptyData('Hello')).toBe(false);
    expect(isEmptyData(123)).toBe(false);
  });

  it('returns false for Blob instances', () => {
    const blob = new Blob(['test'], { type: 'text/plain' });
    expect(isEmptyData(blob)).toBe(false);
  });
});
