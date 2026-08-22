/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  const [sum, product] = solve(n);
  return n % (sum + product) === 0;

  function solve(num) {
    if (num === 0) {
      return [0, 1];
    }

    const digit = num % 10;
    const [sum, product] = solve(Math.floor(num / 10));

    return [sum + digit, product * digit];
  }
};
