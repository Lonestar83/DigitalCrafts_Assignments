string = input("Enter a string: ")
reverse = ""
for index in range(len(string) -1, -1, -1):
    reverse += string[index]

print(reverse)

if string == reverse:
    print(f"{string} is a palindrome.")
else:
    print(f"{string} is not a palindrome.")