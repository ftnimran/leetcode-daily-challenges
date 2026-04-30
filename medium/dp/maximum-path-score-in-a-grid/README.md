# Maximum Path Score in a Grid

🔗 [Problem Link](https://leetcode.com/problems/maximum-path-score-in-a-grid/)
📊 Difficulty: medium
📂 Category: DP

## 📝 Description
You are given an m x n grid where each cell contains one of the values 0, 1, or 2. You are also given an integer k.

You start from the top-left corner (0, 0) and want to reach the bottom-right corner (m - 1, n - 1) by moving only right or down.

Each cell contributes a specific score and incurs an associated cost, according to their cell values:


	0: adds 0 to your score and costs 0.
	1: adds 1 to your score and costs 1.
	2: adds 2 to your score and costs 1. ​​​​​​​


Return the maximum score achievable without exceeding a total cost of k, or -1 if no valid path exists.

Note: If you reach the last cell but the total cost exceeds k, the path is invalid.

&nbsp;
Example 1:


Input: grid = [[0, 1],[2, 0]], k = 1

Output: 2

Explanation:​​​​​​​

The optimal path is:


	
		
			Cell
			grid[i...