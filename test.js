function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (map[top] !== char) {
        return "invalid";
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0 ? "valid" : "invalid";
}

// Example usage:
console.log(isValid("()")); // Output: valid
console.log(isValid("()[]{}")); // Output: valid
console.log(isValid("(]")); // Output: invalid
console.log(isValid("([)]")); // Output: invalid
console.log(isValid("{[]}")); // Output: valid
console.log(isValid("[]")); // Output: valid
