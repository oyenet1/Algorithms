count = 0
total = 0

while True:
    inp = input('Enter Number: ')
    if inp == 'done': break
    value = float(inp)
    total += value
    count += 1
average = total / count

print(average)