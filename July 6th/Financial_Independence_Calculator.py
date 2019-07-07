yearly_expenses = float(input("Enter your annual expenses in dollars: "))
withdrawal_rate =(float(input("Enter your annual withdrawal rate after retirement: ")))/100
net_worth = float(input("Enter your current net worth: "))
yearly_earnings = float(input("Enter your yearly earnings after tax: "))
savings_rate = (float(input("Enter your savings rate: ")))/100


time_till_retirement = ((yearly_expenses/withdrawal_rate) - net_worth)/(yearly_earnings*savings_rate)
time_till_retirment = round(time_till_retirement, 2)


print(f"You will be financially independentt in {time_till_retirement} years.")