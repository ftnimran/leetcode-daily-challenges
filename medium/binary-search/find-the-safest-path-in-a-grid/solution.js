/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  const n = grid.length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dist = Array.from({ length: n }, () => Array(n).fill(-1));
  const q = [];
  let head = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dist[i][j] = 0;
        q.push([i, j]);
      }
    }
  }

  while (head < q.length) {
    const [x, y] = q[head++];

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  class Heap {
    constructor() {
      this.h = [];
    }

    push(node) {
      this.h.push(node);
      let i = this.h.length - 1;

      while (i) {
        let p = (i - 1) >> 1;
        if (this.h[p][0] >= this.h[i][0]) break;
        [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
        i = p;
      }
    }

    pop() {
      const top = this.h[0];
      const last = this.h.pop();

      if (this.h.length) {
        this.h[0] = last;
        let i = 0;

        while (true) {
          let l = i * 2 + 1,
            r = l + 1,
            b = i;

          if (l < this.h.length && this.h[l][0] > this.h[b][0]) b = l;
          if (r < this.h.length && this.h[r][0] > this.h[b][0]) b = r;
          if (b === i) break;

          [this.h[i], this.h[b]] = [this.h[b], this.h[i]];
          i = b;
        }
      }

      return top;
    }

    size() {
      return this.h.length;
    }
  }

  const pq = new Heap();
  const vis = Array.from({ length: n }, () => Array(n).fill(false));

  pq.push([dist[0][0], 0, 0]);

  while (pq.size()) {
    const [safe, x, y] = pq.pop();

    if (vis[x][y]) continue;
    vis[x][y] = true;

    if (x === n - 1 && y === n - 1) return safe;

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !vis[nx][ny]) {
        pq.push([Math.min(safe, dist[nx][ny]), nx, ny]);
      }
    }
  }

  return 0;
};
