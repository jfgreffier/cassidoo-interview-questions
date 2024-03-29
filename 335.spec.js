function flip1DArray(array) {
  return array.toReversed();
}

function toFlip(arrayOfArray, mode) {
  const result = [];
  for (const x of arrayOfArray) {
    // Flip columns
    if (mode === 'horizontal') {
      result.push(flip1DArray(x));
    }
    if (mode === 'vertical') {
      result.push(x);
    }
  }

  if (mode === 'vertical') {
    // Flip lines
    return flip1DArray(arrayOfArray);
  }

  return result;
}

// Flip in place
function flip(arrayOfArray, mode) {
  for (const x of arrayOfArray) {
    if (mode === 'horizontal') {
      x.reverse();
    }
  }

  if (mode === 'vertical') {
    arrayOfArray.reverse();
  }

  return arrayOfArray;
}

describe('flip', () => {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  beforeEach(() => {
    array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  });

  it('should flip horizontally', () => {
    const result = flip(array, 'horizontal');
    expect(result).toStrictEqual([
      [3, 2, 1],
      [6, 5, 4],
      [9, 8, 7],
    ]);
  });

  it('should flip vertically', () => {
    const result = flip(array, 'vertical');
    expect(result).toStrictEqual([
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ]);
  });
});
