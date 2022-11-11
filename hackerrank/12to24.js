function timeConversion(time) {
  let prefix = parseInt(time.substr(0, 2));
  let suffix = time.substr(8, 2);
  if (suffix === "AM") {
    if (prefix == 12) {
      prefix = "00";
      time = prefix + time.substr(2, 6);
      return time;
    }
    return time.substr(0, 8);
  } else {
    if (prefix == 12) {
      return time.substr(0, 8);
    }
    prefix += 12;
    time = prefix + time.substr(2, 6);
    return time;
  }
}

console.log(timeConversion("12:05:45PM"));
