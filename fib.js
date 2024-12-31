let fibOne = (n) => {
  let list = [0, 1];
  let prev2 = 0;
  let prev1 = 1;

  for (let i = 1; i < n; i++) {
    let nextFib = prev2 + prev1;
    list.push(nextFib);
    prev2 = prev1;
    prev1 = nextFib;
  }

  return list;
};

let fibTwo = (n, list = [0, 1]) => {
  if (n <= 1) return list.slice(0, n + 1);

  let nextFib = list[list.length - 1] + list[list.length - 2];
  list.push(nextFib);

  return fibOne(n - 1, list);
};

let findN = (n) => {
  if (n <= 1) return n;
  else return findN(n - 1) + findN(n - 2);
};

console.log(findN(19));
