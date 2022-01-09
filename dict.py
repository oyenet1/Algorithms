counts = dict()

names = [5, 5, 4, 2, 3, 4, 3, 1, 4, 2, 5, 5, 3, 4, 2, 3 ]

for num in names:

# or like this
    counts[num] = counts.get(num, 0) + 1

    # if num not in counts:
    #     counts[num] = 1
    # else:
    #     counts[num] += 1
print(counts)