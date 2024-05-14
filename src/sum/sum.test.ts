import { sum } from './sum';

describe(sum.name, () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, 4)).toBe(7);
    expect(sum(4, 4)).toBe(8);
  });
});
