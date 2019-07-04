import datetime
import json

tables= []
class Table:
    def __init__(self, status = "unoccupied"):
        self.table_number = 0
        self.status = status
        self.start_time = ""
        self.end_time = ""
        self.total_time = ""
        self.cost = ""

def create_tables():
    for i in range(0, 12): 
        table = Table()  
        table.table_number = i + 1  
        tables.append(table)
           
def check_status():
    print('\n')
    print("-------Pool Table Status------")
    for x in range(0, 12):
        print(f"Pool Table #{tables[x].table_number}| Status: {tables[x].status}")

def check_out_table():
    print('\n')
    selection = int(input("Enter the number of the table you wish to use [1-12]: "))
    if tables[selection - 1].status == "unoccupied":
        tables[selection - 1].status = "occupied"
        tables[selection - 1].start_time = datetime.datetime.now()
        print(f"You may now use Pool Table #{selection}. Start time: {tables[selection - 1].start_time}")
    else:
        print(f"Sorry, pool Table #{selection} is occupied.")

def check_in_table():
    print('\n')
    selection = int(input("Enter the number of the table you wish to check in [1-12]: "))
    if tables[selection - 1].status == "occupied":
        tables[selection - 1].status = "unoccupied"
        tables[selection - 1].end_time = datetime.datetime.now()
        calculate_time(tables[selection -1])
        calculate_cost(tables[selection - 1])
        print(f"Thank you for checking in Pool Table #{selection}. End time: {tables[selection - 1].end_time}")
        print(tables[selection - 1].total_time)
        print("%.2f" % tables[selection -1].cost)
    else:
        print(f"Sorry, pool Table #{selection} is already checked in.")

def main_menu():
    choice = ""
    print('\n')
    print("     Enter '1' to view pool table status: ")
    print("     Enter '2' to check a table out: ")
    print("     Enter '3' to check a table in: ")
    print("     Enter 'q' to exit: ")
    while choice != "1" and choice != "2" and choice != "3" and choice != "q":
        choice = input("Enter your choice: ")
    return(choice)

def calculate_time(table):
    total_hours = int(table.end_time.hour) - int(table.start_time.hour)
    total_minutes = int(table.end_time.minute) - int(table.start_time.minute)
    table.total_time = (f"Total Hours: {total_hours}, Total Minutes: {total_minutes}")

def calculate_cost(table):
    total_hours = int(table.end_time.hour) - int(table.start_time.hour)
    total_minutes = int(table.end_time.minute) - int(table.start_time.minute)
    minutes = 60 * total_hours + total_minutes
    table.cost = 0.10 * float(minutes)

def save_data():
    with open("Pool_Table_Management.json", "w") as file_object:
        fileArray = []
        for table in tables:
            fileArray.append(table.__dict__)
        json.dump(fileArray, file_object)

End = False
while End == False:
    create_tables()
    answer = main_menu()
    if answer == "1":
        check_status()
    elif answer == "2":
        check_out_table()
    elif answer == "3":
        check_in_table()
    elif answer == "q":
        save_data()
        End = True

