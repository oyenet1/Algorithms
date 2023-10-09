for (let i = len; i > 0; i--) {
    noswapped = true;
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noswapped = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      runTime++;
    }
    if (noswapped) break;
  }