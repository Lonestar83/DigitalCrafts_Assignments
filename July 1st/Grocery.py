class Shopping_List:
    def __init__(self, title, address, groceries):
        self.title = title
        self.address = address
        self.groceries = groceries

class Grocery:
    def __init__(self, grocery_title, grocery_price, grocery_amount):
        self.grocery_title = grocery_title
        self.grocery_price = grocery_price
        self.grocery_amount = grocery_amount

List_needed = True
Lists = []

while List_needed != False:
    selection = ""
    
    while selection != "y" and selection != "n":
        selection = input("Would you like to make a new shopping list? [y/n] ")

    if selection == "y":
        selected_title = input("Enter the name of the store: ")
        selected_address = input("Enter the address of the store: ")
        groceries_needed = True
        grocery_list = []
        while groceries_needed == True:
            item = ""
            while item != "x":  
                item = input("Enter an item you wish to add to your list [Enter \'x\' to exit]: ")
                if item != "x":
                    price = input("Enter the price of the item: ")
                    amount = input("Enter the amount of the item: ")
                    grocery = Grocery(item, price, amount)
                    grocery_list.append(grocery)
            groceries_needed = False
        
        shopping_list = Shopping_List(selected_title, selected_address, grocery_list)
        Lists.append(shopping_list)

        display_selection = ""
        while display_selection != "y" and display_selection != "n":
            display_selection = input("Would you like to view your shopping list? [y/n] ")
        if display_selection == "y":
            print('\n')
            print(f"{shopping_list.title}, {shopping_list.address}")
            for i in range(0, len(grocery_list)):
                print(f"    {i+1}) {shopping_list.groceries[i].grocery_title}, Price: {shopping_list.groceries[i].grocery_price}, Quantity: {shopping_list.groceries[i].grocery_amount}")
            print('\n')

    elif selection == "n":
        print("Your shopping list is complete.")
        List_needed = False    

if len(Lists) > 0:
    print_select = ""
    while print_select != "y" and print_select != "n":
        print_select = input("Would you like to view the list(s) you've made? [y/n] ")
    if print_select == "y":
        for x in range(0, len(Lists)):
            print('\n')
            print(f"{Lists[x].title}, {Lists[x].address}")
            for q in range(0, len(Lists[x].groceries)):
                print(f"    {q + 1}) {Lists[x].groceries[q].grocery_title}, Price: {Lists[x].groceries[q].grocery_price}, Quantity: {Lists[x].groceries[q].grocery_amount}")
            
    elif print_select == "n":
        print("Program completed.")
