function returnAmount(odd, days, amount) {
  let result = amount * odd ** days;
  return result;
}

console.log(returnAmount(3, 7, 800));
