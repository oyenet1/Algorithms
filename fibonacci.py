def fib(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)
# print(fib(3))

a = 0
b = 1
count = 0
print(a)
print(b)
for i in range(4):
    count += 1
    c = a + b
    print(b)
    a = b
    b = c
print(count)
