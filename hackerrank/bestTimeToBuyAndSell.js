// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function buyAndSell(arr) {
  let buy = arr[0];
  let sell = arr[1];
  mapP = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sell - buy > mapP) {
      mapP = sell - buy;
    }
    if (buy > sell) {
      buy = sell;
    }
    sell = arr[i + 1];
  }
  return mapP;
}

let numbers = [5, 10, 15, 17, 20, 25, 19];
console.log(buyAndSell(numbers));
