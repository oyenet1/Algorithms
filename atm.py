# this program let you check balance and withdraw
name = 'Reuben'
balance = 50000.00
pin = 1234
print('Welcome to networker bank')
put_in = int(input('Kindly input your pin? \n'))

count = 0
if put_in == pin:
            # print('What did you want to do? press 1 for balance and 2 to withdraw')
    selection = int(input('What did you want to do? press 1 for balance and 2 to withdraw: '))
    if selection == 1:
        print(f'{name} your balance is {balance}')
    elif selection == 2:
        withdraw = int(input('How much are you withdrawing? '))
        if withdraw <= balance:
            print(f'Thank you {name}, withdraw successfully')
        else:
            print('Insuuficent balance')
else:
    while put_in != pin:
        count = count + 1
        print('Invalid PIN')
        put_in = int(input('Kindly input your pin again \n'))
        
        if count == 2:
            print('You have entered invalid pin 3 times, try back again in 5mins')
            break
    



