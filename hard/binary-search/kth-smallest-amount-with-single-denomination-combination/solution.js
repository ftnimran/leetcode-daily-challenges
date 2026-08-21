/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  const gcd = (a, b) => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const getLcm = (a, b) => (a / gcd(a, b)) * b;

  const count = (x) => {
    let total = 0;

    const dfs = (idx, currentLcm, selected) => {
      if (idx === coins.length) {
        if (selected === 0 || currentLcm > x) return;

        const value = Math.floor(x / currentLcm);

        total += selected % 2 === 1 ? value : -value;
        return;
      }

      dfs(idx + 1, currentLcm, selected);

      const nextLcm = getLcm(currentLcm, coins[idx]);

      if (nextLcm <= x) {
        dfs(idx + 1, nextLcm, selected + 1);
      }
    };

    dfs(0, 1, 0);

    return total;
  };

  let left = 1;
  let right = Math.min(...coins) * k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (count(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
