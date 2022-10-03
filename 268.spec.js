function fibLike(one, two, length) {
  const result = [one, two];
  for (let i = 2; i < length; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

it('should return a minimal fib like suite', () => {
  expect(fibLike(10, 20, 2)).toStrictEqual([10, 20]);
});

it("Cassidoo's first example - length 3", () => {
  expect(fibLike(10, 20, 3)).toStrictEqual([10, 20, 30]);
});

it("Cassidoo's first example", () => {
  expect(fibLike(10, 20, 5)).toStrictEqual([10, 20, 30, 50, 80]);
});

it("Cassidoo's second example", () => {
  expect(fibLike(3, 7, 5)).toStrictEqual([3, 7, 10, 17, 27]);
});
