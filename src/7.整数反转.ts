/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
const minInt = -Math.pow(2, 31);
const maxInt = -minInt - 1;

function reverse(x: number): number {
  const isNegative = x < 0;
  let reversed = 0;
  if (isNegative) {
    x = -x;
  }

  while (x > 0) {
    console.log("🚀 ~ file: 7.整数反转.ts:19 ~ reverse ~ x:", x);
    const remainder = x % 10;
    console.log(
      "🚀 ~ file: 7.整数反转.ts:21 ~ reverse ~ remainder:",
      remainder
    );  
    reversed = reversed * 10 + remainder;
    console.log("🚀 ~ file: 7.整数反转.ts:26 ~ reverse ~ reversed:", reversed);
    x = Math.floor(x / 10);
  }

  if (reversed > maxInt) {
    return 0;
  }
  return isNegative ? -reversed : reversed;
}

console.log(reverse(123));
// @lc code=end
