nums = [12, 3, 34, 56, 781, 3, 56, 10]

def low(arr):
  low = None
  for num in arr:
    if low is None:
      low = num
    elif num < low:
      low = num
  return low



def low2(arr):
  min = arr[0]
  for i in range(len(arr)):
    if arr[i] < min:
      min = arr[i]
  return min

# best method
# def low(arr):
#   arr.sort()
#   return arr[0]
print(low(nums), 'first solution answer')
print(low2(nums), 'first solution answer')
  