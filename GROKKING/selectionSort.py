def smallest(arr):
    l = 0
    for i in range(len(arr)):
        if arr[l] > arr[i]:
            l = i
    return l


def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        small = smallest(arr)
        newArr.append(arr.pop(small))
    return newArr


nums = [2, 5, 7, 23, 4, 57, 8, 9, 127, 6, 56, 5, 4, 3, 21, 98]
print(selectionSort(nums))
