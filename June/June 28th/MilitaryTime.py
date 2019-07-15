def Norm_to_military(time_string):
    military_time = ""
    if time_string[5] == "A":
        military_time = time_string[0:5]
    else:
        first_number = int(time_string[0]) + 1
        first_number = str(first_number)
        second_number = int(time_string[1]) + 2
        second_number = str(second_number)
        military_time =  first_number + second_number + time_string[2:5]
    print(f"Military Time: {military_time}")    

civilian_time = input("Enter the civilian time: ")
Norm_to_military(civilian_time)        