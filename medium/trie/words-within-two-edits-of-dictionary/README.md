# Words Within Two Edits of Dictionary

🔗 [Problem Link](https://leetcode.com/problems/words-within-two-edits-of-dictionary/)
📊 Difficulty: medium
📂 Category: Trie

## 📝 Description
You are given two string arrays, queries and dictionary. All words in each array comprise of lowercase English letters and have the same length.

In one edit you can take a word from queries, and change any letter in it to any other letter. Find all words from queries that, after a maximum of two edits, equal some word from dictionary.

Return a list of all words from queries, that match with some word from dictionary after a maximum of two edits. Return the words in the same order they appear in queries.

&nbsp;
Example 1:


Input: queries = [&quot;word&quot;,&quot;note&quot;,&quot;ants&quot;,&quot;wood&quot;], dictionary = [&quot;wood&quot;,&quot;joke&quot;,&quot;moat&quot;]
Output: [&quot;word&quot;,&quot;note&quot;,&quot;wood&quot;]
Explanation:
- Changing the &#39;r&#39; in &quot;word...