let countDown = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done");
};

let countDownTwo = (num) => {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDownTwo(num);
};

console.log(countDown(4));
console.log(countDownTwo(4));
