# Furthest Point From Origin

🔗 [Problem Link](https://leetcode.com/problems/furthest-point-from-origin/)
📊 Difficulty: easy
📂 Category: String

## 📝 Description
You are given a string moves of length n consisting only of characters &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;. The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:


	move to the left if moves[i] = &#39;L&#39; or moves[i] = &#39;_&#39;
	move to the right if moves[i] = &#39;R&#39; or moves[i] = &#39;_&#39;


Return the distance from the origin of the furthest point you can get to after n moves.

&nbsp;
Example 1:


Input: moves = &quot;L_RL__R&quot;
Output: 3
Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves &quot;LLRLLLR&quot;.


Example 2:


Input: moves = &quot;_R__LL_&quot;
Output: 5
Explanation: The furthest point we can reach...