var closestEqualElement = function (nums, queries) {
  const n = nums.length;
  const posMap = new Map();

  for (let i = 0; i < n; i++) {
    let val = nums[i];
    if (!posMap.has(val)) {
      posMap.set(val, []);
    }
    posMap.get(val).push(i);
  }

  const qLen = queries.length;
  const result = new Int32Array(qLen);

  for (let i = 0; i < qLen; i++) {
    const queryIdx = queries[i];
    const val = nums[queryIdx];
    const indices = posMap.get(val);

    if (indices.length === 1) {
      result[i] = -1;
      continue;
    }

    let left = 0;
    let right = indices.length - 1;
    let posInList = -1;

    while (left <= right) {
      let mid = (left + right) >>> 1;
      if (indices[mid] === queryIdx) {
        posInList = mid;
        break;
      } else if (indices[mid] < queryIdx) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    const prevIdx = indices[(posInList - 1 + indices.length) % indices.length];
    const nextIdx = indices[(posInList + 1) % indices.length];

    const d1 = Math.abs(prevIdx - queryIdx);
    const d2 = Math.abs(nextIdx - queryIdx);

    const dist1 = d1 < n - d1 ? d1 : n - d1;
    const dist2 = d2 < n - d2 ? d2 : n - d2;

    result[i] = dist1 < dist2 ? dist1 : dist2;
  }

  return Array.from(result);
};

var solveQueries = closestEqualElement;
