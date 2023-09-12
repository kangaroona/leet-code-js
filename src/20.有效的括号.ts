/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
//用stack 来解决
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const leftArr = ["{", "[", "("];
  const validMap: any = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (leftArr.includes(s[i])) {
      stack.push(s[i]);
    } else {
      //right
      if (stack.length && stack[stack.length - 1] === validMap[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
}
console.log(isValid("{[]}"));
// @lc code=end
