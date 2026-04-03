# Maximum Walls Destroyed by Robots

🔗 [Problem Link](https://leetcode.com/problems/maximum-walls-destroyed-by-robots/)
📊 Difficulty: hard
📂 Category: DP

## 📝 Description
There is an endless straight line populated with some robots and walls. You are given integer arrays robots, distance, and walls:



	robots[i] is the position of the ith robot.
	distance[i] is the maximum distance the ith robot&#39;s bullet can travel.
	walls[j] is the position of the jth wall.


Every robot has one bullet that can either fire to the left or the right at most distance[i] meters.

A bullet destroys every wall in its path that lies within its range. Robots are fixed obstacles: if a bullet hits another robot before reaching a wall, it immediately stops at that robot and cannot continue.

Return the maximum number of unique walls that can be destroyed by the robots.

Notes:


	A wall and a robot may share the same position; the wall can be destroyed by the robot at that posit...