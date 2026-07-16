/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
  function gcd(a, b) {
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  }

  const prefix = [];
  let mx = 0;

  for (const num of nums) {
    if (num > mx) mx = num;
    prefix.push(gcd(num, mx));
  }

  prefix.sort((a, b) => a - b);

  let ans = 0;

  let i = 0;
  let j = prefix.length - 1;

  while (i < j) {
    ans += gcd(prefix[i], prefix[j]);
    i++;
    j--;
  }

  return ans;
};
