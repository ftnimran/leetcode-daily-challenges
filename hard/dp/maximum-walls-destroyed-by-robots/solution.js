/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function (robots, distance, walls) {
  let n = robots.length;

  let left = new Array(n).fill(0);
  let right = new Array(n).fill(0);
  let num = new Array(n).fill(0);

  let robotsToDistance = new Map();
  for (let i = 0; i < n; i++) {
    robotsToDistance.set(robots[i], distance[i]);
  }

  robots.sort((a, b) => a - b);
  walls.sort((a, b) => a - b);

  const lowerBound = (arr, target) => {
    let l = 0,
      r = arr.length;
    while (l < r) {
      let m = (l + r) >> 1;
      if (arr[m] < target) l = m + 1;
      else r = m;
    }
    return l;
  };

  const upperBound = (arr, target) => {
    let l = 0,
      r = arr.length;
    while (l < r) {
      let m = (l + r) >> 1;
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  };

  for (let i = 0; i < n; i++) {
    let pos1 = upperBound(walls, robots[i]);

    let leftPos;
    if (i >= 1) {
      leftPos = lowerBound(
        walls,
        Math.max(
          robots[i] - robotsToDistance.get(robots[i]),
          robots[i - 1] + 1,
        ),
      );
    } else {
      leftPos = lowerBound(walls, robots[i] - robotsToDistance.get(robots[i]));
    }

    left[i] = pos1 - leftPos;

    let rightPos;
    if (i < n - 1) {
      rightPos = upperBound(
        walls,
        Math.min(
          robots[i] + robotsToDistance.get(robots[i]),
          robots[i + 1] - 1,
        ),
      );
    } else {
      rightPos = upperBound(walls, robots[i] + robotsToDistance.get(robots[i]));
    }

    let pos2 = lowerBound(walls, robots[i]);
    right[i] = rightPos - pos2;

    if (i === 0) continue;

    let pos3 = lowerBound(walls, robots[i - 1]);
    num[i] = pos1 - pos3;
  }

  let subLeft = left[0];
  let subRight = right[0];

  for (let i = 1; i < n; i++) {
    let currentLeft = Math.max(
      subLeft + left[i],
      subRight - right[i - 1] + Math.min(left[i] + right[i - 1], num[i]),
    );

    let currentRight = Math.max(subLeft + right[i], subRight + right[i]);

    subLeft = currentLeft;
    subRight = currentRight;
  }

  return Math.max(subLeft, subRight);
};
