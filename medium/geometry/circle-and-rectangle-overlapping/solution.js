/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  const getClosest = (val, min, max) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
  };

  const calcDistSq = (dims, index) => {
    if (index === dims.length) return 0;

    const [val, min, max] = dims[index];
    const closest = getClosest(val, min, max);
    const diff = val - closest;

    return diff * diff + calcDistSq(dims, index + 1);
  };

  const dimensions = [
    [xCenter, x1, x2],
    [yCenter, y1, y2],
  ];

  return calcDistSq(dimensions, 0) <= radius * radius;
};
