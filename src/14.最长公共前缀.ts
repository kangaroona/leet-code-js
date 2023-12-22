/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix1(strs: string[]): string {
  if (strs.length === 0) return "";
  strs.sort((a: string, b: string) => {
    return a.length - b.length;
  });

  let tempPrefix: string = strs[0];
  let i: number = 1;

  while (i < strs.length) {
    let tempLen = tempPrefix.length - 1;
    // console.log(tempLen, tempPrefix, strs[i]);
    while (!strs[i].includes(tempPrefix) && tempLen >= 1) {
      tempPrefix = tempPrefix.substring(0, tempLen);
      tempLen--;
    }
    i++;
  }
  console.log(tempPrefix);
  return tempPrefix;
}
longestCommonPrefix1(["flower", "flowe", "floight"]);
// @lc code=end
