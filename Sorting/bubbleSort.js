const bubbleSort = (arr) => {
    let runTime = 0;
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
            runTime++;
            console.log(arr);
        }
        if (noSwap) break;
    }
    return { array: arr, runTime }
}

function bubbleSortTwo(arr) {
    const n = arr.length;
    let swapped;
    let runTime = 0;
    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i+1]
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
            runTime++;
        }
    } while (swapped);

    return { array: arr, runTime };
}

let sample = [35, 23, 5, 14, 3]
let sample2 = [1, 2, 4, 12]
let sample3 = [13, 23, 4, 1, 52, 6, 12, 14, 3, 25, 32, 67, 134, 2, 43, 6, 8, 34, 8, 69, 15, 23, 5, 14, 324, 33]

console.log(bubbleSort(sample3))
console.log(bubbleSortTwo(sample3))