/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const mapping: string[] = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const res: string[] = [];
  if (digits.length === 0) {
    return res;
  }
  const backtrack = (start: number, sb: string[]) => {
    if (sb.length === digits.length) {
      res.push(sb.join(""));
    }
    for (let i = start; i < digits.length; i++) {
      // console.log(
      //   "🚀 ~ file: 17.电话号码的字母组合.ts:28 ~ backtrack ~  i:",
      //   i
      // );

      const digit = parseInt(digits.charAt(i));
      for (const c of mapping[digit]) {
        sb.push(c);
        backtrack(i + 1, sb);
        sb.pop();
      }
    }
  };
  backtrack(0, []);
  return res;
}
console.log(letterCombinations("23"));
// @lc code=end
