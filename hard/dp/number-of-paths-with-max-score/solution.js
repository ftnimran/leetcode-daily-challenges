/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function (board) {
  const MOD = 1000000007;
  const n = board.length;

  const memo = Array.from({ length: n }, () => Array(n).fill(null));

  function dfs(i, j) {
    if (i >= n || j >= n) return [-1, 0];

    if (board[i][j] === "X") return [-1, 0];

    if (i === n - 1 && j === n - 1) return [0, 1];

    if (memo[i][j]) return memo[i][j];

    let best = -1;
    let cnt = 0;

    const moves = [
      [1, 0],
      [0, 1],
      [1, 1],
    ];

    for (const [dx, dy] of moves) {
      const [sc, way] = dfs(i + dx, j + dy);

      if (sc === -1) continue;

      if (sc > best) {
        best = sc;
        cnt = way;
      } else if (sc === best) {
        cnt = (cnt + way) % MOD;
      }
    }

    if (best === -1) return (memo[i][j] = [-1, 0]);

    let val = 0;

    const ch = board[i][j];

    if (ch >= "1" && ch <= "9") val = ch.charCodeAt(0) - 48;

    return (memo[i][j] = [best + val, cnt]);
  }

  const [score, ways] = dfs(0, 0);

  if (ways === 0) return [0, 0];

  return [score, ways];
};
