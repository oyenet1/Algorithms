def employ(name, age):
  if age >= 18 and age <= 40:
    result = f'{name}, You are qualify to work with us'
  elif age > 40:
    result = f'{name}, You are too old for the job'
  else:
    result = f'{name}, Yo are young for the job'
  return result

print(employ('John', 41))