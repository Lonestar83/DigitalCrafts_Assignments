def remove_duplicate(list):
    new_list = []
    for x in list:
        if x not in new_list:
            new_list.append(x)
    print(new_list)

names = ["Alex","John","Mary","Steve","John", "Steve"]

remove_duplicate(names)
