#!/usr/bin/env python3
def sONn(num):
  if num <= 1:
    return num
  return num + sONn(num - 1)

print(sONn(4))
  