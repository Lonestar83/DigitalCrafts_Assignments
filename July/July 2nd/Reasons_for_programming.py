with open('Reasons_for_programming.txt', 'a') as file_objects:
    name = input("Enter your name: ")
    file_objects.write(f"Name: {name} \n")
    file_objects.write(f"Reason(s) for learning programming: \n")
    reason_number = 1
    while True:
        reason = input("Why are you studying programming [Press 'x' to exit]? ")
        if reason != "x":
            file_objects.write(f"{reason_number}) {reason} \n")
            reason_number += 1
        else:
            break
