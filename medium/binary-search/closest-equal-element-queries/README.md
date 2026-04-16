# Closest Equal Element Queries

🔗 [Problem Link](https://leetcode.com/problems/closest-equal-element-queries/)
📊 Difficulty: medium
📂 Category: Binary Search

## 📝 Description
You are given a circular array nums and an array queries.

For each query i, you have to find the following:


	The minimum distance between the element at index queries[i] and any other index j in the circular array, where nums[j] == nums[queries[i]]. If no such index exists, the answer for that query should be -1.


Return an array answer of the same size as queries, where answer[i] represents the result for query i.

&nbsp;
Example 1:


Input: nums = [1,3,1,4,1,3,2], queries = [0,3,5]

Output: [2,-1,3]

Explanation:


	Query 0: The element at queries[0] = 0 is nums[0] = 1. The nearest index with the same value is 2, and the distance between them is 2.
	Query 1: The element at queries[1] = 3 is nums[3] = 4. No other index contains 4, so the result is -1.
	Query 2: The element at queries[...