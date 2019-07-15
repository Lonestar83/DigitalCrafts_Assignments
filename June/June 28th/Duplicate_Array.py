def duplicate_array(array):
    new_array = []
    times = 2
    while times > 0:
        for y in range(0, len(array)):
            new_array.append(array[y])
        times -= 1
    print(new_array)

numbers = [1,2,3,4,5]
duplicate_array(numbers)