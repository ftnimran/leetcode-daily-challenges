/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
  const digitProduct = (num) => {
    let product = 1;

    while (num > 0) {
      product *= num % 10;
      num = Math.floor(num / 10);
    }

    return product;
  };

  while (digitProduct(n) % t !== 0) n++;

  return n;
};
