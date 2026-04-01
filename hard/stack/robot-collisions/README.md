# Robot Collisions

🔗 [Problem Link](https://leetcode.com/problems/robot-collisions/)
📊 Difficulty: hard
📂 Category: Stack

## 📝 Description
There are n 1-indexed robots, each having a position on a line, health, and movement direction.

You are given 0-indexed integer arrays positions, healths, and a string directions (directions[i] is either &#39;L&#39; for left or &#39;R&#39; for right). All integers in positions are unique.

All robots start moving on the line simultaneously at the same speed in their given directions. If two robots ever share the same position while moving, they will collide.

If two robots collide, the robot with lower health is removed from the line, and the health of the other robot decreases by one. The surviving robot continues in the same direction it was going. If both robots have the same health, they are both removed from the line.

Your task is to determine the health of the robots that survive t...