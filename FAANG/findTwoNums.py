def findTwoNums(nums, target):
    for i in nums:
        ntf = target - nums[i]
        j = i + 1
        for j in nums:
            if nums[j] is ntf:
                return [i, j]
    return null

print(findTwoNums([1, 3, 7, 9, 2], 11))
