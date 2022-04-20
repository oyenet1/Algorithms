# square of any number
def sqr(a, b):
  number = 1
  for i in range(b):
    number *= a
  return number
print(sqr(3,7))