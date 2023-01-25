function disemvowel(str) {
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o" || str[i].toLowerCase() == "u") {
      continue;
    }
    newString += str[i];
  }
  return newString;
}


console.log(disemvowel("iamaboy"));