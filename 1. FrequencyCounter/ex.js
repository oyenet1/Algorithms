const fC = (arr1, arr2) => {
 let first = {};
 let second = {};
 for (let i = 0; i < arr1.length; i++) {
  first[arr1[i]] = ++first[arr1[i]] || 1;
 }
 for (let j = 0; j < arr2.length; j++) {
  second[arr2[j]] = ++second[arr2[j]] || 1;
 }
 for (const key in first) {
  if (first[key] !== second[key ** 2]) {
   return false;
  }
 }
 return true;
}

let one = [1, 2, 1];
let two = [4, 1, 1];

console.log(fC(one, two));