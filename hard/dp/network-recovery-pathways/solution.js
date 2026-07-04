/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function (edges, online, k) {
  const n = online.length;

  const graph = Array.from({ length: n }, () => []);

  let maxCost = 0;

  for (const [u, v, c] of edges) {
    graph[u].push([v, c]);
    maxCost = Math.max(maxCost, c);
  }

  const can = (limit) => {
    const memo = new Array(n);

    const dfs = (u) => {
      if (memo[u] !== undefined) return memo[u];

      if (u === n - 1) return 0;

      let best = Infinity;

      for (const [v, w] of graph[u]) {
        if (w < limit) continue;
        if (v !== n - 1 && !online[v]) continue;

        const nxt = dfs(v);

        if (nxt !== Infinity) best = Math.min(best, w + nxt);
      }

      return (memo[u] = best);
    };

    return dfs(0) <= k;
  };

  let lo = 0,
    hi = maxCost,
    ans = -1;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;

    if (can(mid)) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return ans;
};
