const nArr: number[] = [1, 2, 3];
const res = nArr.reduce((prev, current) => {
  return prev + current;
});
console.log(res);
function reduce1<T>(
  arr: T[],
  callback: (prev: T, cur: T) => T,
  initValue?: T
): T {
  let res1: T = typeof initValue === 'undefined' ? arr[0] : initValue;
  const start = typeof initValue === 'undefined' ? 1 : 0;
  for (let i: number = start; i < arr.length; i++) {
    res1 = callback(res1, arr[i]);
  }
  return res1;
}
console.log(
  reduce1<number>(
    nArr,
    (prev: number, current: number) => {
      return prev + current;
    },
    10
  )
);
