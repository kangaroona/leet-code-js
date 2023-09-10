/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((i) => i != "")
    .reverse()
    .join(" ")
    .trim();
}
console.log(reverseWords("a good   example"));
// @lc code=end
