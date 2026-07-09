/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const graph = Array.from({ length: n }, () => []);

  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] <= maxDiff) {
      graph[i].push(i - 1);
      graph[i - 1].push(i);
    }
  }

  const comp = new Array(n).fill(-1);

  function dfs(node, id) {
    comp[node] = id;

    for (const next of graph[node]) {
      if (comp[next] === -1) dfs(next, id);
    }
  }

  let id = 0;

  for (let i = 0; i < n; i++) {
    if (comp[i] === -1) dfs(i, id++);
  }

  const ans = [];

  for (const [u, v] of queries) ans.push(comp[u] === comp[v]);

  return ans;
};
