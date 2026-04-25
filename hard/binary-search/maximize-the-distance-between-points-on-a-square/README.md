# Maximize the Distance Between Points on a Square

🔗 [Problem Link](https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square/)
📊 Difficulty: hard
📂 Category: Binary Search

## 📝 Description
You are given an integer side, representing the edge length of a square with corners at (0, 0), (0, side), (side, 0), and (side, side) on a Cartesian plane.

You are also given a positive integer k and a 2D integer array points, where points[i] = [xi, yi] represents the coordinate of a point lying on the boundary of the square.

You need to select k elements among points such that the minimum Manhattan distance between any two points is maximized.

Return the maximum possible minimum Manhattan distance between the selected k points.

The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.

&nbsp;
Example 1:


Input: side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4

Output: 2

Explanation:



Select all four points.


Example 2:


Input: side = 2, points ...