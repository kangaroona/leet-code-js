function AddTwoNumbers(arr1:number[],arr2:number[]):string{
  let arr1Len = arr1.length,arr2Len = arr2.length;
  let maxLen = arr1Len>arr2Len?arr1Len:arr2Len;
  let isJew = 0;
  let outArr:Number[] = [];
  for(let i=0;i<maxLen;i++){
    arr1[i] = i>=arr1.length?0:arr1[i];
    arr2[i] = i>=arr2.length?0:arr2[i];
    let curV = arr1[i]+arr2[i]+isJew;
    if(curV>=10){
      outArr[i] = Math.floor(curV%10);
      isJew = 1
    }
    else{
      outArr.push(curV);
      isJew = 0;

    }
  }
  console.log(outArr)
  return ''
}

AddTwoNumbers([2,4,9],[5,6,4,8]);
