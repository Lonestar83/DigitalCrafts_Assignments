
def Create_tree():
    try:
        lines = int(input("Enter the numbe of lines: "))
        asterix = 1
        while lines > 0:
            print(" " * lines + "*" * asterix)
            lines -= 1
            asterix += 2
    except ValueError:
        print("Sorry, you need to enter an integer.")

Create_tree()