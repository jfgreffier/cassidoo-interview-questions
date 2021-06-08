function lonelyNumber(a, b, c) {
  const array = [a, b, c];
  array.sort((a, b) => a - b);
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
      result *= array[i];
    }
  }
  return result;
}

it('works!', () => {
  expect(lonelyNumber(1, 2, 3)).toBe(6);
  expect(lonelyNumber(6, 6, 4)).toBe(4);
  expect(lonelyNumber(7, 7, 7)).toBe(1);
});
