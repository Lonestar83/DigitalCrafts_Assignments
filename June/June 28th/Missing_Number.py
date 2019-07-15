def find_missing(array):
    for x in range(0, len(array) - 2):
        if array[x] + 1 != array[x + 1]:
            missing = array[x] + 1
    print(missing)

numbers = [1,2,3,4,5, 6, 8, 9, 10]
find_missing(numbers)