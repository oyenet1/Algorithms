function rollOver(odd, times, capital) {
  for (let i = 0; i < times; i++) {
    capital *= odd;
  }
  return capital;
}

function checkPlayingTimes(odd, capital, expected) {
  let times = 0;
  while (capital < expected) {
    capital *= odd;
    times++;
  }
  return `The process will repeat ${times} times`;
}

function returnWithPercent(percent, capital, expected) {
  let times = 0;
  while (capital < expected) {
    let gain = capital * percent;
    capital += gain;
    times++;
  }
  return `The process will repeat ${times} times`;
}



// console.log(rollOver(2, 10, 1000));
console.log(checkPlayingTimes(1.2, 1000, 10000));

