import { expect, test } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';

function daysBetween(isoDate1, isoDate2) {
  const date1 = Temporal.PlainDate.from(isoDate1);
  const date2 = Temporal.PlainDate.from(isoDate2);

  const result = date1.until(date2);

  return result.days;
}

test('daysBetween', () => {
  expect(daysBetween('2024-01-01', '2024-01-29')).toBe(28);
});

test('leap year and all', () => {
  expect(daysBetween('2020-02-29', '2023-10-31')).toBe(1340);
});
