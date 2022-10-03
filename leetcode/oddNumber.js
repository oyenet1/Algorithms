function odds(s, f) {
  let odds = [];
  for (let i = s; i <= f; i++) {
    if (i % 2 == 1) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(odds(1, 8));
