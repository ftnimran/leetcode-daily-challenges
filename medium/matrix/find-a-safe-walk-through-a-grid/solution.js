/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
  const m = grid.length;
  const n = grid[0].length;

  const INF = 1e9;
  const dist = Array.from({ length: m }, () => Array(n).fill(INF));

  const heap = [];

  const push = (cost, x, y) => {
    heap.push([cost, x, y]);

    let i = heap.length - 1;

    while (i > 0) {
      const p = (i - 1) >> 1;

      if (heap[p][0] <= heap[i][0]) break;

      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };

  const pop = () => {
    const top = heap[0];
    const last = heap.pop();

    if (heap.length) {
      heap[0] = last;

      let i = 0;

      while (true) {
        let l = i * 2 + 1;
        let r = l + 1;
        let s = i;

        if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r;

        if (s === i) break;

        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }

    return top;
  };

  dist[0][0] = grid[0][0];
  push(grid[0][0], 0, 0);

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (heap.length) {
    const [cost, x, y] = pop();

    if (cost !== dist[x][y]) continue;

    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

      const nc = cost + grid[nx][ny];

      if (nc < dist[nx][ny]) {
        dist[nx][ny] = nc;
        push(nc, nx, ny);
      }
    }
  }

  return dist[m - 1][n - 1] < health;
};
