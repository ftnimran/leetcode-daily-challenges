/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      let queue = [[i, j, -1, -1]];
      visited[i][j] = true;

      while (queue.length) {
        let [x, y, px, py] = queue.shift();

        for (const [dx, dy] of dirs) {
          let nx = x + dx;
          let ny = y + dy;

          if (
            nx < 0 ||
            ny < 0 ||
            nx >= m ||
            ny >= n ||
            grid[nx][ny] !== grid[x][y]
          )
            continue;

          if (nx === px && ny === py) continue;

          if (visited[nx][ny]) return true;

          visited[nx][ny] = true;
          queue.push([nx, ny, x, y]);
        }
      }
    }
  }

  return false;
};
