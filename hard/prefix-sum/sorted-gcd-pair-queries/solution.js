/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function (nums, queries) {
  let mx = 0;

  for (const x of nums) if (x > mx) mx = x;

  const freq = new Int32Array(mx + 1);

  for (const x of nums) freq[x]++;

  const cnt = new Int32Array(mx + 1);

  for (let d = 1; d <= mx; d++) {
    for (let j = d; j <= mx; j += d) cnt[d] += freq[j];
  }

  const exact = new Float64Array(mx + 1);

  for (let g = mx; g >= 1; g--) {
    let pairs = (cnt[g] * (cnt[g] - 1)) / 2;

    for (let j = g + g; j <= mx; j += g) pairs -= exact[j];

    exact[g] = pairs;
  }

  const prefix = new Float64Array(mx + 1);

  for (let i = 1; i <= mx; i++) prefix[i] = prefix[i - 1] + exact[i];

  const ans = new Array(queries.length);

  for (let k = 0; k < queries.length; k++) {
    const target = queries[k];

    let l = 1;
    let r = mx;

    while (l < r) {
      const mid = (l + r) >> 1;

      if (prefix[mid] > target) r = mid;
      else l = mid + 1;
    }

    ans[k] = l;
  }

  return ans;
};
