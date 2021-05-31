function inits(list) {
  return [[]].concat(list.map((_, i) => list.slice(0, i + 1)));
}

it('works!', () => {
  expect(inits([4, 3, 2, 1])).toStrictEqual([[], [4], [4, 3], [4, 3, 2], [4, 3, 2, 1]]);
  expect(inits([144])).toStrictEqual([[], [144]]);
});
