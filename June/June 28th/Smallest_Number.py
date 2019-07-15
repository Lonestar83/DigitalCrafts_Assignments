def find_smallest(array):
    smallest = array[0]
    for x in array:
        if x < smallest:
            smallest = x
    print(smallest)

numbers = [7,42,3,4]

find_smallest(numbers)