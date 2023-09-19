/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let len = 0;
  const prefixArr = [];
  let flag = true;
  strs.forEach((val) => {
    len = val.length > len ? val.length : len;
  });
  for (let i = 0; i < len; i++) {
    const curChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (curChar !== strs[j][i]) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
    prefixArr.push(curChar);
  }
  return prefixArr.join("");
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// @lc code=end
