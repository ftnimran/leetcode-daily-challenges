/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */

var minMoves = function (classroom, energy) {
  const m = classroom.length;
  const n = classroom[0].length;

  let start = 0;
  let count = 0;

  const litterId = Array.from({ length: m }, () => Array(n).fill(-1));

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (classroom[r][c] === "S") {
        start = r * n + c;
      } else if (classroom[r][c] === "L") {
        litterId[r][c] = count++;
      }
    }
  }

  if (count === 0) return 0;

  const fullMask = (1 << count) - 1;
  const best = new Map();

  const queue = [[start, energy, fullMask]];

  best.set(`${start},${fullMask}`, energy);

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const bfs = (current, moves) => {
    if (current.length === 0) return -1;

    const next = [];

    for (const [pos, curEnergy, mask] of current) {
      if (mask === 0) return moves;

      if (curEnergy === 0) continue;

      const r = Math.floor(pos / n);
      const c = pos % n;

      for (let d = 0; d < 4; d++) {
        const nr = r + dr[d];
        const nc = c + dc[d];

        if (
          nr < 0 ||
          nr >= m ||
          nc < 0 ||
          nc >= n ||
          classroom[nr][nc] === "X"
        ) {
          continue;
        }

        const cell = classroom[nr][nc];

        let nextEnergy = curEnergy - 1;

        if (cell === "R") {
          nextEnergy = energy;
        }

        let nextMask = mask;

        if (cell === "L") {
          nextMask &= ~(1 << litterId[nr][nc]);
        }

        const nextPos = nr * n + nc;
        const key = `${nextPos},${nextMask}`;

        if (!best.has(key) || nextEnergy > best.get(key)) {
          best.set(key, nextEnergy);
          next.push([nextPos, nextEnergy, nextMask]);
        }
      }
    }

    return bfs(next, moves + 1);
  };

  return bfs(queue, 0);
};
