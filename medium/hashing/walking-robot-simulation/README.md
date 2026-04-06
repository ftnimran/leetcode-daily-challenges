# Walking Robot Simulation

🔗 [Problem Link](https://leetcode.com/problems/walking-robot-simulation/)
📊 Difficulty: medium
📂 Category: Hashing

## 📝 Description
A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot receives an array of integers commands, which represents a sequence of moves that it needs to execute. There are only three possible types of instructions the robot can receive:


	-2: Turn left 90 degrees.
	-1: Turn right 90 degrees.
	1 &lt;= k &lt;= 9: Move forward k units, one unit at a time.


Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, it will stay in its current location (on the block adjacent to the obstacle) and move onto the next command.

Return the maximum squared Euclidean distance that the robot reaches at any point in its path (i.e. if the distance is 5, return 25).

Note:


	There can be an obstacle at (0, 0...