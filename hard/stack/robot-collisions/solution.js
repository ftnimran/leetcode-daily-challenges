/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const n = positions.length;
  const robots = [];

  for (let i = 0; i < n; i++) {
    robots.push({
      pos: positions[i],
      health: healths[i],
      dir: directions[i],
      id: i,
    });
  }

  robots.sort((a, b) => a.pos - b.pos);

  const stack = [];

  for (let robot of robots) {
    if (robot.dir === "R") {
      stack.push(robot);
      continue;
    }

    let gone = false;
    while (stack.length > 0 && stack[stack.length - 1].dir === "R") {
      let top = stack[stack.length - 1];

      if (robot.health > top.health) {
        stack.pop();
        robot.health -= 1;
      } else if (robot.health < top.health) {
        top.health -= 1;
        gone = true;
        break;
      } else {
        stack.pop();
        gone = true;
        break;
      }
    }

    if (!gone) {
      stack.push(robot);
    }
  }

  stack.sort((a, b) => a.id - b.id);

  return stack.map((r) => r.health);
};
