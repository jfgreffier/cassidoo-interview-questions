import { expect, test } from 'vitest';

const a = (n) => n | 0;

test('rocks', () => {
  expect(a(1.7)).toBe(1);
  expect(a(-2.1)).toBe(-2);
  expect(a(500.4)).toBe(500);
  expect(a(-369.5)).toBe(-369);
  expect(a(150)).toBe(150);
  expect(a(-350)).toBe(-350);
});
