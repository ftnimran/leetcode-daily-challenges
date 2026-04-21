# Minimize Hamming Distance After Swap Operations

🔗 [Problem Link](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/)
📊 Difficulty: medium
📂 Category: Array

## 📝 Description
You are given two integer arrays, source and target, both of length n. You are also given an array allowedSwaps where each allowedSwaps[i] = [ai, bi] indicates that you are allowed to swap the elements at index ai and index bi (0-indexed) of array source. Note that you can swap elements at a specific pair of indices multiple times and in any order.

The Hamming distance of two arrays of the same length, source and target, is the number of positions where the elements are different. Formally, it is the number of indices i for 0 &lt;= i &lt;= n-1 where source[i] != target[i] (0-indexed).

Return the minimum Hamming distance of source and target after performing any amount of swap operations on array source.

&nbsp;
Example 1:


Input: source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[...