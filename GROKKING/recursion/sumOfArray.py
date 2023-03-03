def sumofArr(arr):
    if len(arr) < 0:
        return 0
    else:
        return sumofArr(arr[len(arr)-1])


nums = [1, 2, 4, 3]
print(sumofArr(nums))
