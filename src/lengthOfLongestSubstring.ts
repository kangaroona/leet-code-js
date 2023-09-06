// const lengthOfLongestSubstring = (inputStr:string):number=>{
//   let maxLen = 1;
//   const totalLen = inputStr.length;
//   console.log("🚀 ~ file: lengthOfLongestSubstring.ts:4 ~ lengthOfLongestSubstring ~ totalLen:", totalLen)
//   let startIndex = 1

//   let j = 0; //当前要比较的 index
//     // console.log()

//   while(maxLen<=totalLen-j && j<=totalLen){
//     console.log("🚀 ~ file: lengthOfLongestSubstring.ts:6 ~ lengthOfLongestSubstring ~ j:", j)

//     let curItem = inputStr[j]; //当前要比较的值
//     maxLen = maxLen-j;
//     console.log("🚀 ~ file: lengthOfLongestSubstring.ts:13 ~ lengthOfLongestSubstring ~ maxLen:", maxLen)
//     console.log("🚀 ~ file: lengthOfLongestSubstring.ts:5 ~ lengthOfLongestSubstring ~ startIndex:", startIndex)
//     for(let i=startIndex;i<totalLen;i++){ //已经比较过的就不比较了，更改要比较列表的指针
//       if(inputStr[i] === curItem) {
//         console.log("🚀 ~ file: lengthOfLongestSubstring.ts:19 ~ lengthOfLongestSubstring ~ inputStr[i]:", inputStr[i])

//         startIndex = i+1;
//         break;
//       }
//       ++maxLen
//     }
//     j++;
//   }
//   return maxLen;
// }
const lengthOfLongestSubstring = function (s: string): number {
  let arr: unknown[] = []; //不重复数组
  let length = 0;
  for (let item of s) {
    if (arr.includes(item)) {
      console.log("🚀 ~ file: lengthOfLongestSubstring.ts:36 ~ arr:", arr);

      let index = arr.indexOf(item);
      arr.splice(0, index + 1);
    }
    arr.push(item);
    length = length > arr.length ? length : arr.length;
  }
  return length;
};
console.log(lengthOfLongestSubstring("abcadcbb"));
