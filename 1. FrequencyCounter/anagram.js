let isAnagram = function (word1, word2) {
  let first = {};
  let second = {};

  for (const char of word1) {
    first[char] = ++first[char] || 1;
  }
  for (const char of word2) {
    second[char] = ++second[char] || 1;
  }
  for (const key in first) {
    // if (first[key] !== second[key]) {
    //   return false;
    // }
    console.log(first[key] !== second[key]);
  }
  return true;
};

console.log(isAnagram("areap", "ear"));
