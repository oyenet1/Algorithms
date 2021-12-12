# program to calculate paecent
print('Welcome to your salary and profit calculator \n')
salary = 50000

sales = int(input('How much did you make in sales this month? '))

# percent = salary * sales / 100

if sales <= 10000:
    percent = salary * 10/100
elif sales > 10000 and sales <= 20000:
    percent = salary * 20/100
else:
    percent = salary * 50/100

amount = salary + percent
print(f'Your salary plus your sales profit is {amount}')