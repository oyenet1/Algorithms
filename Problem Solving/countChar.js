function countChar(str) {
  const result = {};
  if (str.length < 1) {
    return "Empty String";
  }
  for (let char of str) {
    // char = char.toLowerCase();
    if (isAlphaNumeric(char)) { //check if the char is alpha numeric. It can also be written as /[a-z0-9]/.test(char) 
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}

console.log(countChar("Hard 05 is0 the hardest Cap"));