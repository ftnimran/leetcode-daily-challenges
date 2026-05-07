# Jump Game IX

🔗 [Problem Link](https://leetcode.com/problems/jump-game-ix/)
📊 Difficulty: medium
📂 Category: DP

## 📝 Description
You are given an integer array nums.

From any index i, you can jump to another index j under the following rules:


	Jump to index j where j &gt; i is allowed only if nums[j] &lt; nums[i].
	Jump to index j where j &lt; i is allowed only if nums[j] &gt; nums[i].


For each index i, find the maximum value in nums that can be reached by following any sequence of valid jumps starting at i.

Return an array ans where ans[i] is the maximum value reachable starting from index i.

&nbsp;
Example 1:


Input: nums = [2,1,3]

Output: [2,2,3]

Explanation:


	For i = 0: No jump increases the value.
	For i = 1: Jump to j = 0 as nums[j] = 2 is greater than nums[i].
	For i = 2: Since nums[2] = 3 is the maximum value in nums, no jump increases the value.


Thus, ans = [2, 2, 3].





Example 2:


Input: ...