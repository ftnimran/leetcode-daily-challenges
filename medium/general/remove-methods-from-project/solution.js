/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function (n, k, invocations) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of invocations) {
    graph[u].push(v);
  }

  const suspicious = new Array(n).fill(false);

  const stack = [k];
  suspicious[k] = true;

  while (stack.length) {
    const node = stack.pop();

    for (const next of graph[node]) {
      if (!suspicious[next]) {
        suspicious[next] = true;
        stack.push(next);
      }
    }
  }

  for (const [u, v] of invocations) {
    if (!suspicious[u] && suspicious[v]) {
      const ans = [];
      for (let i = 0; i < n; i++) ans.push(i);
      return ans;
    }
  }

  const ans = [];

  for (let i = 0; i < n; i++) {
    if (!suspicious[i]) ans.push(i);
  }

  return ans;
};
