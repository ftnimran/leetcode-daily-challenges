/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
    const n = source.length;
    const graph = Array.from({length: n}, () => []);

    for (let [a, b] of allowedSwaps) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Array(n).fill(false);
    let ans = 0;

    function dfs(node, comp) {
        if (visited[node]) return;
        visited[node] = true;
        comp.push(node);

        for (let nei of graph[node]) {
            dfs(nei, comp);
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const comp = [];
            dfs(i, comp);

            const freq = new Map();

            for (let idx of comp) {
                freq.set(source[idx], (freq.get(source[idx]) || 0) + 1);
            }

            for (let idx of comp) {
                if (freq.get(target[idx]) > 0) {
                    freq.set(target[idx], freq.get(target[idx]) - 1);
                } else {
                    ans++;
                }
            }
        }
    }

    return ans;
};