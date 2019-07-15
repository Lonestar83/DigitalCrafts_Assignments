task_list = []

while True:
    print("     Press 1 to add a task.")
    print("     Press 2 to delete a task.")
    print("     Press 3 to view the full list.")
    print("     Press q to quit.")

    selection = input("Enter command: ")
    print('\n')

    if selection == "1":
        task = {}
        
        task_title = input("Enter the title of the task: ")
        task['title'] = task_title
        
        while True: 
            task_priority = input("Enter the priority of the task [high, medium, low]: ")
            if task_priority == "high" or task_priority == "medium" or task_priority == "low":
                task['priority'] = task_priority
                break
        
        task_list.append(task)
        print('\n')    

    elif selection == "2":
        for x in range(0, len(task_list)):
            print(f"    {x + 1} - {task_list[x]['title']} - {task_list[x]['priority']}")
        task_delete = int(input("Which task would you like to delete: "))
        del task_list[task_delete - 1]
        print('\n')
        for x in range(0, len(task_list)):
            print(f"    {x + 1} - {task_list[x]['title']} - {(task_list[x]['priority'])}")
        print('\n')
    
    elif selection == "3":
        for i in range(0, len(task_list)):
            print(f"    {i + 1} - {task_list[i]['title']} - {task_list[i]['priority']}")
        print('\n')
    
    elif selection == "q":
        break