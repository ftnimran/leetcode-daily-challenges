var zigZagArrays = function (n, l, r) {
  const MOD = 1000000007n;
  const K = r - l + 1;

  if (K === 1) return 0;

  function multiply(A, B, size) {
    let C = new BigInt64Array(size * size);
    for (let i = 0; i < size; i++) {
      let rowOffset = i * size;
      for (let k = 0; k < size; k++) {
        let aik = A[rowOffset + k];
        if (aik === 0n) continue;

        let kOffset = k * size;
        for (let j = 0; j < size; j++) {
          C[rowOffset + j] = (C[rowOffset + j] + aik * B[kOffset + j]) % MOD;
        }
      }
    }
    return C;
  }

  function power(mat, p, size) {
    if (p === 1) return mat;

    let half = power(mat, Math.floor(p / 2), size);
    let halfSq = multiply(half, half, size);

    if (p % 2 !== 0) {
      return multiply(halfSq, mat, size);
    }
    return halfSq;
  }

  let M = new BigInt64Array(K * K);
  for (let row = 0; row < K; row++) {
    for (let col = K - row; col < K; col++) {
      M[row * K + col] = 1n;
    }
  }

  let MPower = n - 2 === 1 ? M : power(M, n - 2, K);

  let V = new BigInt64Array(K);
  for (let i = 0; i < K; i++) {
    V[i] = BigInt(i);
  }

  let totalUpSequences = 0n;
  for (let i = 0; i < K; i++) {
    let rowSum = 0n;
    let rowOffset = i * K;
    for (let j = 0; j < K; j++) {
      if (MPower[rowOffset + j] !== 0n) {
        rowSum = (rowSum + MPower[rowOffset + j] * V[j]) % MOD;
      }
    }
    totalUpSequences = (totalUpSequences + rowSum) % MOD;
  }

  let ans = (totalUpSequences * 2n) % MOD;

  return Number(ans);
};
