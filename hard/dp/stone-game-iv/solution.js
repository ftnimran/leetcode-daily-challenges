/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const memo = new Array(n + 1).fill(-1);

  function solve(stones) {
    if (stones === 0) {
      return false;
    }

    if (memo[stones] !== -1) {
      return memo[stones];
    }

    for (let i = 1; i * i <= stones; i++) {
      if (!solve(stones - i * i)) {
        return (memo[stones] = true);
      }
    }

    return (memo[stones] = false);
  }

  return solve(n);
};
