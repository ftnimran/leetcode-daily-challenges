/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let maxCost = 0;

  for (const c of costs) {
    if (c > maxCost) maxCost = c;
  }

  const freq = new Array(maxCost + 1).fill(0);

  for (const c of costs) {
    freq[c]++;
  }

  let ans = 0;

  for (let cost = 1; cost <= maxCost; cost++) {
    if (freq[cost] === 0) continue;

    const take = Math.min(freq[cost], Math.floor(coins / cost));

    ans += take;
    coins -= take * cost;

    if (coins < cost) break;
  }

  return ans;
};
