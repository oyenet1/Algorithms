newFile = open('file.txt')
readOne = newFile.read()

print('"',readOne,'"', 'contains ', len(readOne), 'words')
print(type(readOne))