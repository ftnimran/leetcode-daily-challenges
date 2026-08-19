/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const rows = new Map();

  for (const [row, seat] of reservedSeats) {
    if (seat >= 2 && seat <= 9) {
      if (!rows.has(row)) rows.set(row, new Set());
      rows.get(row).add(seat);
    }
  }

  let answer = (n - rows.size) * 2;

  const blocks = [
    [2, 3, 4, 5],
    [4, 5, 6, 7],
    [6, 7, 8, 9],
  ];

  const dfs = (index, seats, count) => {
    if (index === 3) {
      return count;
    }

    let best = dfs(index + 1, seats, count);
    const block = blocks[index];

    if (block.every((seat) => !seats.has(seat))) {
      const nextSeats = new Set(seats);

      for (const seat of block) {
        nextSeats.add(seat);
      }

      best = Math.max(best, dfs(index + 1, nextSeats, count + 1));
    }

    return best;
  };

  for (const seats of rows.values()) {
    answer += dfs(0, seats, 0);
  }

  return answer;
};
