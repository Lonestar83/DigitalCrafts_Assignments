number = int(input("Enter an integer: "))
total = 1

while number > 0:
    total *= number
    number -= 1

print(total)
