def sqr(r, p, a):
  result = 1
  for i in range(p):
    if p <= 0:
      return 1
    else:
      result *= r
  result *= a
  return result

print(sqr(4, 5, 500))