function findTwoNums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const numToFind = target - nums[i];
        for (let j = (i + 1); j < nums.length; j++) {
           if (nums[j] === numToFind ) {
                return [i, j];
           } 
        }
    }
    return null;
}
console.log(findTwoNums([1, 3, 7, 4, 2], 11));