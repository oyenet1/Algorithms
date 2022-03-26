nums = [190, 5000, 687, 7, 9, 809]

# first algorithm
def highest(arr):
  hgt = -1
  for num in arr:
    if num >= hgt:
      hgt = num
  return hgt

def h2(arr):
  hgt = -1
  for i in range(len(arr)):
    if arr[i] > hgt:
      hgt = arr[i]
  return hgt
      
print(highest(nums), 'first solution answer')
print(h2(nums), 'second solution answer')