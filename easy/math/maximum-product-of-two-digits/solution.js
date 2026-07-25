/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
  let first = 0,
    second = 0;

  while (n > 0) {
    const digit = n % 10;

    if (digit >= first) {
      second = first;
      first = digit;
    } else if (digit > second) {
      second = digit;
    }

    n = Math.floor(n / 10);
  }

  return first * second;
};
