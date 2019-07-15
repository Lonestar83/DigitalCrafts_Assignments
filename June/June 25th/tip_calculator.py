price = input("Enter the price of your purchase: ")
price_float = float(price)
tip_percentage = input("Enter the tip percentage: ")
tip_float = float(tip_percentage)
tip_modify = tip_float / 100
tip_total = price_float * tip_modify
print(f"You should leave a tip of {tip_total}.")