function moveZeroes(integers) {
  let count = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] === 0) {
      count++;
      integers.splice(i, 1);
    }
  }
  integers.push(...Array(count).fill(0));
  return integers;
}

console.log(moveZeroes([0, 2, 0, 3, 8]));
