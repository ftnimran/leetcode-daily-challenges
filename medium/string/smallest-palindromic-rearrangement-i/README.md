# 3517. Smallest Palindromic Rearrangement I

🔗 [Problem Link](https://leetcode.com/problems/smallest-palindromic-rearrangement-i/)
📊 Difficulty: medium
📂 Category: String

## 📝 Description

You are given a **palindromic** string `s`.

Return the **lexicographically smallest** palindromic permutation of `s`.

**Example 1:**

**Input:** s = "z"

**Output:** "z"

**Explanation:**

A string of only one character is already the lexicographically smallest palindrome.

**Example 2:**

**Input:** s = "babab"

**Output:** "abbba"

**Explanation:**

Rearranging `"babab"` → `"abbba"` gives the smallest lexicographic palindrome.

**Example 3:**

**Input:** s = "daccad"

**Output:** "acddca"

**Explanation:**

Rearranging `"daccad"` → `"acddca"` gives the smallest lexicographic palindrome.

**Constraints:**

*   `1 <= s.length <= 105`
*   `s` consists of lowercase English letters.
*   `s` is guaranteed to be palindromic.
