const promises: Promise<string>[] = [
  Promise.reject('ERROR A'),
  Promise.reject('ERROR B'),
  Promise.reject('result'),
];
function any(pArr: Promise<string>[]) {
  let errCount: number = 0;
  const PArrLen: number = pArr.length;
  const errs: any[] = [];
  return new Promise((res: (value: string) => void, rej) => {
    pArr.forEach((item) => {
      item.then(
        (val: string) => {
          res(val);
        },
        (err) => {
          errCount++;
          errs.push(err);
          if (errCount == PArrLen) {
            rej(errs);
          }
        }
      );
    });
  });
}
any(promises).then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  }
);
