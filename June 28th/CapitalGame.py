from Capitals import capitals
import random

print('\n')

 
score = 0
chances = 3
while chances > 0:
    print(f"            Score: {score}")
    print(f"            Chances: {chances}")        
    print('\n')

    x = random.randint(0, len(capitals))
    while x > len(capitals) - 1:
        x = random.randint(0, len(capitals))
    keys = list(capitals.keys())
    country = keys[x]
    answer = input(f"What is the capital of {country}? ")
    for (key, value) in capitals.items():
        if answer == capitals[country]:
            score += 1
            print("Correct!")
            print('\n')
            break
        else:
            chances -= 1
            print(f"No, the capital of {country} is {capitals[country]}.")
            print('\n')
            break
print("         Game Over!")
print('\n')