# program to employ
print('welcome to Networker Driving Company \n')
name = input('What is your name? ')
age = int(input('How old are you? '))

if age < 18:
    result = 'You are underage'
elif age >= 18 and age <= 40:
    result = 'Congrat you are qualifield to work with us'
else:
    result = 'You are too old'

print(result)