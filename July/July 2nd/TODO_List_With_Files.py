import json

class Task:
    def __init__(self, title, priority):
        self.title = title
        self.priority = priority

task_list = []

while True:
    print("     Press 1 to add a task.")
    print("     Press 2 to delete a task.")
    print("     Press 3 to view the full list.")
    print("     Press q to quit.")

    selection = input("Enter command: ")
    print('\n')
    
    exit1 = False
    while selection == "1" and exit1 != True:
        task_title = input("Enter the title of the task [Enter 'x' to exit]: ")
        if task_title != "x":
            task_priority = ""
            while task_priority != "high" and task_priority != "medium" and task_priority != "low": 
                task_priority = input("Enter the priority of the task [high, medium, low]: ")     
            task = Task(task_title, task_priority)
            task_list.append(task.__dict__)
        else:
            with open("TODO_List_With_Files.json", "w") as file_object:
                json.dump(task_list, file_object)    
            exit1 = True
            print('\n')    
    
    exit2 = False
    while selection == "2" and exit2 != True:
        with open("TODO_List_With_Files.json") as file_object:
            task_list = json.load(file_object)
        for x in range(0, len(task_list)):
            print(f"    {x + 1} - {task_list[x]['title']} - {task_list[x]['priority']}")
        task_delete = input("Which task would you like to delete [Enter 'x' to exit]: ")
        if task_delete != "x":
            task_delete = int(task_delete)
            if task_delete > 0 and task_delete <= len(task_list):
                del task_list[task_delete - 1]
                print('\n')
                with open("TODO_List_With_Files.json", "w") as file_object:
                    json.dump(task_list, file_object)
        else:
            exit2 = True
            print('\n')

    if selection == "3":
        with open("TODO_List_With_Files.json") as file_object:
            task_list = json.load(file_object)
        for x in range(0, len(task_list)):
            print(f"    {x + 1} - {task_list[x]['title']} - {task_list[x]['priority']}")
        print('\n')
    
    elif selection == "q":
        break