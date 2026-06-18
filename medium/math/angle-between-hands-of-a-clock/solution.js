/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const calc = (h, m) => {
    if (m === 0) return (h % 12) * 30;
    return calc(h, m - 1) + 0.5;
  };

  const hourAngle = calc(hour, minutes);
  const minuteAngle = minutes * 6;

  const diff = Math.abs(hourAngle - minuteAngle);

  return Math.min(diff, 360 - diff);
};
