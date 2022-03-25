def findTwoNums(nums, target):
    for i in range(len(nums)):
        ntf = target - nums[i]
        j = i + 1
        for j in range(len(nums)):
            if nums[j] is ntf:
                return [i, j]
    return 'cannot find answer'

print(findTwoNums([1, 3, 7, 9, 4], 4))
