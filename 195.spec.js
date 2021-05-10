function sameDigits(n) {
  const ncube = n ** 3;
  for (const digit of n + '') {
    if (!(ncube + '').includes(digit)) {
      return false;
    }
  }
  for (const digit of ncube + '') {
    if (!(n + '').includes(digit)) {
      return false;
    }
  }
  return true;
}

it('rocks', () => {
  expect(sameDigits(1)).toBe(true);
  expect(sameDigits(10)).toBe(true);
  expect(sameDigits(251894)).toBe(true);
  expect(sameDigits(251895)).toBe(false);
});
