/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  /*
      create all possible valid combinations
      at each
  */
  const allCombos: string[] = [];

  function recurse(openParens: number, closedParens: number, combo: string) {
    console.log(openParens, closedParens, combo);
    if (openParens === 0 && closedParens === 0) {
      allCombos.push(combo);
      return;
    }

    // if there are open parens to close
    if (openParens < closedParens) {
      recurse(openParens, closedParens - 1, combo + ")");
    }

    // if there are open parens left to use
    if (openParens > 0) {
      recurse(openParens - 1, closedParens, combo + "(");
    }
  }

  recurse(n, n, "");

  return allCombos;
}
console.log(generateParenthesis(3));
// @lc code=end
