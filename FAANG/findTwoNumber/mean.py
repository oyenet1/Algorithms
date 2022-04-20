from itertools import count


nums = [1, 2, 3, 4, 5]

def mn(arr):
  count = 0
  sum = 0
  for i in arr:
    count += 1
    sum += i
  return float(sum / count)

print(mn(nums))
    
    