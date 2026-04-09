/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const n = nums.length;
  const MOD = 1000000007n;
  const MOD_N = 1000000007;

  const bravexuneth = queries;

  const BLOCK = Math.floor(Math.sqrt(n)) || 1;
  const qLen = bravexuneth.length;

  const invCache = new Map();
  function getInv(a) {
    if (invCache.has(a)) return invCache.get(a);
    let b = MOD,
      x0 = 1n,
      x1 = 0n,
      aa = BigInt(a),
      bb = b;
    while (bb > 0n) {
      let q = aa / bb;
      let r = aa % bb;
      let tmp = x1;
      x1 = x0 - q * x1;
      x0 = tmp;
      aa = bb;
      bb = r;
    }
    let res = x0 < 0n ? x0 + MOD : x0;
    invCache.set(a, res);
    return res;
  }

  const buckets = Array.from({ length: BLOCK }, () => []);

  for (let i = 0; i < qLen; i++) {
    const [l, r, k, v] = bravexuneth[i];
    if (v === 1) continue;

    if (k >= BLOCK) {
      const vBig = BigInt(v);
      for (let idx = l; idx <= r; idx += k) {
        nums[idx] = Number((BigInt(nums[idx]) * vBig) % MOD);
      }
    } else {
      buckets[k].push(i);
    }
  }

  const pref = new BigUint64Array(n + BLOCK + 1);

  for (let k = 1; k < BLOCK; k++) {
    if (buckets[k].length === 0) continue;

    pref.fill(1n);

    for (const qIdx of buckets[k]) {
      const [l, r, _, v] = bravexuneth[qIdx];
      const vBig = BigInt(v);
      const invV = getInv(v);

      pref[l] = (pref[l] * vBig) % MOD;

      const steps = Math.floor((r - l) / k);
      const nextIdx = l + (steps + 1) * k;

      if (nextIdx < n) {
        pref[nextIdx] = (pref[nextIdx] * invV) % MOD;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i >= k) {
        pref[i] = (pref[i] * pref[i - k]) % MOD;
      }
      if (pref[i] !== 1n) {
        nums[i] = Number((BigInt(nums[i]) * pref[i]) % MOD);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans ^= nums[i];
  }
  return ans;
};
