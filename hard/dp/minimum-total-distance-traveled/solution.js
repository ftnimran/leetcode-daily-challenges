/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const memo = new Map();

  function dfs(i, j, used) {
    if (i === robot.length) return 0;
    if (j === factory.length) return Infinity;

    let key = i + "," + j + "," + used;
    if (memo.has(key)) return memo.get(key);

    let [pos, limit] = factory[j];

    let res = Infinity;

    res = dfs(i, j + 1, 0);

    if (used < limit) {
      res = Math.min(res, Math.abs(robot[i] - pos) + dfs(i + 1, j, used + 1));
    }

    memo.set(key, res);
    return res;
  }

  return dfs(0, 0, 0);
};
