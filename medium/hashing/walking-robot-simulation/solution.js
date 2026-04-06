/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0,
    y = 0;
  let dir = 0;
  let maxDist = 0;

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const set = new Set();
  for (let [ox, oy] of obstacles) {
    set.add(ox + "," + oy);
  }

  for (let cmd of commands) {
    if (cmd === -1) {
      dir = (dir + 1) % 4;
    } else if (cmd === -2) {
      dir = (dir + 3) % 4;
    } else {
      let [dx, dy] = dirs[dir];

      for (let i = 0; i < cmd; i++) {
        let nx = x + dx;
        let ny = y + dy;

        if (set.has(nx + "," + ny)) break;

        x = nx;
        y = ny;

        let dist = x * x + y * y;
        if (dist > maxDist) maxDist = dist;
      }
    }
  }

  return maxDist;
};
