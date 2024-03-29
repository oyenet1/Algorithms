def selectionSort1(arr):
    for i in range(len(arr)):
        low = i
        for j in range(i+1, len(arr)):
            if (arr[low] > arr[j]):
                low = j
        arr[i], arr[low] = arr[low], arr[i]
    return arr


def smallest(arr):
    low = 0
    for i in range(len(arr)):
        if arr[low] > arr[i]:
            low = i
    return low


def sortTwo(arr):
    newArr = []
    for j in range(len(arr)):
        small = smallest(arr)
        newArr.append(arr.pop(small))
    return newArr


numbers = [5, 2, 7, 3, 4, 1, 23, 12, 33, 31, 65, 79, 28, 55, 59]
print(sortTwo(numbers))
