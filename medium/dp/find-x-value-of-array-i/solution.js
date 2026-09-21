/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
  let ans = new Array(k).fill(0);

  const dfs = (i) => {
    if (i === nums.length) return new Array(k).fill(0);

    let nextRes = dfs(i + 1);
    let currRes = new Array(k).fill(0);
    let val = nums[i] % k;

    currRes[val] += 1;

    for (let x = 0; x < k; x++) {
      if (nextRes[x] > 0) {
        currRes[(x * val) % k] += nextRes[x];
      }
    }

    for (let x = 0; x < k; x++) {
      ans[x] += currRes[x];
    }

    return currRes;
  };

  dfs(0);
  return ans;
};
