import { expect, test } from 'vitest';

function truncate(text, truncate) {
  const word = /[a-z]+/g;
  const wordOrNot = /[a-z]+|[^a-z]+/g;

  return text
    .match(wordOrNot)
    .map((chunk) => {
      if (chunk.match(word)) {
        return chunk.substring(0, truncate);
      }
      return chunk;
    })
    .join('');
}

// It's a good thing nobody uses diacritic like in français
// Or that there are alway spaces in between words
// 用英文就是很用以的。

test("Cassidoo's first example", () => {
  expect(truncate('never gonna give you up', 3)).toBe('nev gon giv you up');
});

test("Cassidoo's second example", () => {
  expect(truncate('*hello* darkness, my ~old_friend', 3)).toBe('*hel* dar, my ~old_fri');
});
