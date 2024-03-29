function isValidNumber(string) {
  return /^(-|\+)?\d*\.?\d*$/.test(string);
}

['7', '0011', '+3.14', '4.', '-.9', '-123.456', '-0.1'].forEach((string) =>
  console.log(string, isValidNumber(string)),
);
['abc', '1a', 'e8', '–6', '-+3', '95x54e53.'].forEach((string) =>
  console.log(string, isValidNumber(string)),
);
