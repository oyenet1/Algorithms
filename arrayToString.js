let arrToStr = (nums) => {
    let res;
    for (let i = 0; i < nums.length; i++) {
        res += nums[i];
    }
    return res;
}


let nums = [2, 3, 4, 56, 77, 0];
console.log(arrToStr(nums));