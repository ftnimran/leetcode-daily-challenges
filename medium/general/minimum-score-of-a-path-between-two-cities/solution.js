/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const vis = new Array(n + 1).fill(false);
  const q = [1];
  vis[1] = true;

  let ans = Infinity;

  while (q.length) {
    const u = q.shift();

    for (const [v, w] of graph[u]) {
      ans = Math.min(ans, w);

      if (!vis[v]) {
        vis[v] = true;
        q.push(v);
      }
    }
  }

  return ans;
};
