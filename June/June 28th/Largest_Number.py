def find_largest(array):
    largest = 0
    for x in array:
        if x > largest:
            largest = x
    print(largest)

numbers = [1,7,2,3,4]

find_largest(numbers)