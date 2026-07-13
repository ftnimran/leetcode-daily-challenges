/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const ans = [];
  const q = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (q.length) {
    const num = q.shift();

    if (num >= low && num <= high) ans.push(num);

    const last = num % 10;

    if (last < 9) {
      q.push(num * 10 + last + 1);
    }
  }

  return ans.sort((a, b) => a - b);
};
