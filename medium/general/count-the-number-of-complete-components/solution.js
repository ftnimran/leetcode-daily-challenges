/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const vis = Array(n).fill(false);

  let ans = 0;

  function dfs(node) {
    vis[node] = true;

    let nodes = 1;
    let edgeSum = graph[node].length;

    for (const nei of graph[node]) {
      if (!vis[nei]) {
        const [cnt, edge] = dfs(nei);

        nodes += cnt;
        edgeSum += edge;
      }
    }

    return [nodes, edgeSum];
  }

  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      const [nodes, edgeSum] = dfs(i);

      if (edgeSum === nodes * (nodes - 1)) ans++;
    }
  }

  return ans;
};
