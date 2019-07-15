number = int(input("Enter an integer: "))
prime = True
for index in range(2, number):
    if number % index == 0:
        prime = False

if prime == True:
    print(f"{number} is a prime number.")
else:
    print(f"{number} is not a prime number.")