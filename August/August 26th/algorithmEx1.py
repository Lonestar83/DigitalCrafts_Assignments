arr = [1,2, 2, 2, 7,2,3,8,7,2]
arr.sort()
dups = []
for i in range(len(arr)):
    if arr[i - 1] == arr[i] and arr[i-1] not in dups:
        dups.append(arr[i])

print(len(dups))

number = input("Enter a number: ")
arr = []
while(number > 0):
    remainder = number % 10
    number -= remainder
    arr.append(remainder)
    number /= 10
print(arr)