import { expect, test } from 'vitest';

function daysBetween(isoDate1, isoDate2) {
  const date1 = new Date(isoDate1);
  const date2 = new Date(isoDate2);

  const milliseconds = date2 - date1;
  const hours = milliseconds / 3_600_000;

  return hours / 24;
}

test('daysBetween', () => {
  expect(daysBetween('2024-01-01', '2024-01-29')).toBe(28);
});

test('leap year and all', () => {
  expect(daysBetween('Feb 29, 2020', 'Oct 31, 2023')).toBe(1340);
});
