/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  function dfs(curr, moves) {
    if (curr === goal) return true;
    if (moves === s.length) return false;

    const next = curr.slice(1) + curr[0];

    return dfs(next, moves + 1);
  }

  return dfs(s, 0);
};
