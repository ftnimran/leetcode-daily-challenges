/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText;

  let n = encodedText.length;
  let cols = n / rows;
  let res = [];

  for (let startCol = 0; startCol < cols; startCol++) {
    let i = 0,
      j = startCol;

    while (i < rows && j < cols) {
      res.push(encodedText[i * cols + j]);
      i++;
      j++;
    }
  }

  return res.join("").trimEnd();
};
