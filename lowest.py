lowest = None
ranges = [58, 56, 96, 21, 4, 25, 69, 100 ,88, 552, 52]
for num in ranges:
    if lowest is None:
        lowest = num
    elif num < lowest:
        lowest = num
    # print(lowest)
print(lowest)
