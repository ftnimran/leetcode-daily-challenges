/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([nums[i], i]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  const pos = new Array(n);
  const comp = new Array(n);

  let cid = 0;

  for (let i = 0; i < n; i++) {
    if (i && arr[i][0] - arr[i - 1][0] > maxDiff) cid++;

    pos[arr[i][1]] = i;
    comp[arr[i][1]] = cid;
  }

  const reach = new Array(n);

  let r = 0;

  for (let l = 0; l < n; l++) {
    while (r + 1 < n && arr[r + 1][0] - arr[l][0] <= maxDiff) {
      r++;
    }

    reach[l] = r;
  }

  const LOG = 17;

  const up = Array.from({ length: LOG }, () => new Array(n));

  for (let i = 0; i < n; i++) up[0][i] = reach[i];

  for (let k = 1; k < LOG; k++) {
    for (let i = 0; i < n; i++) {
      up[k][i] = up[k - 1][up[k - 1][i]];
    }
  }

  const ans = [];

  for (const [u, v] of queries) {
    if (u === v) {
      ans.push(0);
      continue;
    }

    if (comp[u] !== comp[v]) {
      ans.push(-1);
      continue;
    }

    let l = pos[u];
    let rr = pos[v];

    if (l > rr) {
      [l, rr] = [rr, l];
    }

    let cur = l;
    let steps = 0;

    for (let k = LOG - 1; k >= 0; k--) {
      if (up[k][cur] < rr) {
        cur = up[k][cur];
        steps += 1 << k;
      }
    }

    ans.push(steps + 1);
  }

  return ans;
};
