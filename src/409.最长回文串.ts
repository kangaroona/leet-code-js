/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  let countMap = new Map<string, number>();
  let result: number = 0;
  let OddV: number = 0;
  for (let curChar of s) {
    const curNum = countMap.get(curChar);
    if (!curNum) {
      countMap.set(curChar, 1);
    } else {
      countMap.set(curChar, curNum + 1);
    }
  }
  for (let [k, curV] of countMap) {
    if (curV % 2 == 0) {
      result += curV;
    } else {
      if (curV > 2) {
        //说明这个字符重复了 3 次或者 3 次以上
        result += curV - 1;
        OddV = 1;
      } else {
        OddV = 1;
      }
    }
  }
  return result + OddV;
}
// @lc code=end
