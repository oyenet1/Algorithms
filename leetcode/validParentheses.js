// this is a stack algorith.
/*  
  -----------steps---------

*/

// var isValid = (s) => {
//   let stack = [];
//   let closeToOpen = { ")": "(", "}": "{", "]": "[" };

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in closeToOpen) {
//       if (stack && (stack[stack.length - 1] == closeToOpen[s[i]])) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     } else {
//       stack.push(s[i]);
//     }
//   }
//   return stack.length == 0;
// }
var isValid = (s) => {
  let stck = [];
  let closeToOpen = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stck.push(s[i]);
    } else if (stck[stck.length - 1] === closeToOpen[s[i]]) {
      stck.pop();
    } else {
      return false;
    }
  }
  return stck.length == 0;
}


let str = "{}()";

console.log(isValid(str));

