/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  const cnt = [0, 0, 0];

  for (const stone of stones) {
    cnt[stone % 3]++;
  }

  if (cnt[0] % 2 === 0) {
    return cnt[1] > 0 && cnt[2] > 0;
  }

  return Math.abs(cnt[1] - cnt[2]) > 2;
};
