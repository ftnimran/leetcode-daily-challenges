/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  // Build Graph
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= maxDiff) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  function dfs(node, target, vis) {
    if (node === target) return 0;

    vis[node] = true;

    let ans = Infinity;

    for (const next of graph[node]) {
      if (!vis[next]) {
        const d = dfs(next, target, vis);

        if (d !== Infinity) ans = Math.min(ans, d + 1);
      }
    }

    return ans;
  }

  const res = [];

  for (const [u, v] of queries) {
    const vis = new Array(n).fill(false);

    const dist = dfs(u, v, vis);

    res.push(dist === Infinity ? -1 : dist);
  }

  return res;
};
