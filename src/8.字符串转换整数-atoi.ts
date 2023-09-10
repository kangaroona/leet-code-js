/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let arr: any[] = s
    .trim()
    .split(" ")
    .filter((item) => item)
    .map((item) => {
      if (!Number.isNaN(parseInt(item, 10))) return item;
    });
  console.log(arr);
  const rs = parseInt(arr[0]) || 0;
  const res =
    rs > 2147483647 ? 2147483647 : rs < -2147483648 ? -2147483648 : rs;
  return res;
  // return parseInt(s.trim(), 10);
}

console.log(myAtoi("words and 987"));
// @lc code=end
