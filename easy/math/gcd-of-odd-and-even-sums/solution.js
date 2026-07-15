/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
  const odd = n * n;
  const even = n * (n + 1);

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  return gcd(odd, even);
};
