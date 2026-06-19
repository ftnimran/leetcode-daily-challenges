/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;

  for (const g of gain) {
    altitude += g;
    if (altitude > maxAltitude) {
      maxAltitude = altitude;
    }
  }

  return maxAltitude;
};
