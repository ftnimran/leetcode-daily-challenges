/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let answer = 0;

  function check(x, changed) {
    if (x === 0) return changed;

    const digit = x % 10;

    if (digit === 3 || digit === 4 || digit === 7) {
      return false;
    }

    if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
      changed = true;
    }

    return check(Math.floor(x / 10), changed);
  }

  for (let i = 1; i <= n; i++) {
    if (check(i, false)) {
      answer++;
    }
  }

  return answer;
};
