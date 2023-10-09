for (let i = 0; i < total; i++) {
        for (let j = 0; 0 < total; j++) {
            if (arr[j] > arr[j + 1]) {
                let fi = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = fi;
            }
        }
    }