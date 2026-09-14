/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const [x1, y1, x2, y2] = rec1;
  const [a1, b1, a2, b2] = rec2;

  return (
    Math.min(x2, a2) > Math.max(x1, a1) && Math.min(y2, b2) > Math.max(y1, b1)
  );
};
