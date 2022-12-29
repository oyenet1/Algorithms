def bs(nums, t):
    count = 0
    l = 0
    r = len(nums) - 1
    while (l <= r):
        m = (r+l) // 2
        if nums[m] > t:
            r = m-1
        elif nums[m] < t:
            l = m+1
        else:
            return str(m) + 'th position, count: ' + str(count)
        count = count+1
    return 'number not found'


def ls(list, t):
    count = 0
    for i in range(len(list)):
        if list[i] == t:
            return str(i) + 'th position, count: ' + str(count)
        count = count + 1
    return None


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
print(numbers.pop(3))
