# Decode the Slanted Ciphertext

🔗 [Problem Link](https://leetcode.com/problems/decode-the-slanted-ciphertext/)
📊 Difficulty: medium
📂 Category: String

## 📝 Description
A string originalText is encoded using a slanted transposition cipher to a string encodedText with the help of a matrix having a fixed number of rows rows.

originalText is placed first in a top-left to bottom-right manner.

The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of originalText. The arrow indicates the order in which the cells are filled. All empty cells are filled with &#39; &#39;. The number of columns is chosen such that the rightmost column will not be empty after filling in originalText.

encodedText is then formed by appending all characters of the matrix in a row-wise fashion.

The characters in the blue cells are appended first to encodedText, then the red cells, and so on, and finally the yellow cells. ...