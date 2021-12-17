newFile = open('file.txt')

count = 0
# counting of lines
for line in newFile:
    count += 1
    if line.endswith('Bukunmi'):
        print(line)
    else:
        print('The line does not start with Oyerinde')

print('There are', count, 'line in the document')