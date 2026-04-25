/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  const n = points.length;
  const perimeter = 4 * side;

  const get1D = (x, y) => {
    if (y === 0) return x;
    if (x === side) return side + y;
    if (y === side) return 3 * side - x;
    return 4 * side - y;
  };

  let positions = new BigInt64Array(n);
  for (let i = 0; i < n; i++) {
    positions[i] = BigInt(get1D(points[i][0], points[i][1]));
  }

  positions.sort();

  const doubled = new BigInt64Array(2 * n);
  const bigPerimeter = BigInt(perimeter);
  for (let i = 0; i < n; i++) {
    doubled[i] = positions[i];
    doubled[i + n] = positions[i] + bigPerimeter;
  }

  const lowerBound = (left, right, target) => {
    let ans = right;
    while (left < right) {
      let mid = (left + right) >>> 1;
      if (doubled[mid] >= target) {
        ans = mid;
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  };

  const check = (mid) => {
    const bigMid = BigInt(mid);
    const limit = doubled[0] + bigMid;

    for (let i = 0; i < n; i++) {
      if (doubled[i] > limit) break;

      let count = 1;
      let currentIdx = i;
      let lastPos = doubled[currentIdx];

      for (let j = 2; j <= k; j++) {
        let target = lastPos + bigMid;
        let nextIdx = lowerBound(currentIdx + 1, i + n, target);

        if (nextIdx === i + n) break;

        currentIdx = nextIdx;
        lastPos = doubled[currentIdx];
        count++;
      }

      if (count === k && doubled[i] + bigPerimeter - lastPos >= bigMid) {
        return true;
      }
    }
    return false;
  };

  let left = 0,
    right = 2 * side;
  let result = 0;

  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (check(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
