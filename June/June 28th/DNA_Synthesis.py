import random
def generate_DNA():
    DNA = []
    loops = 999
    while loops > 0:
        number = random.randint(0, 4)
        if number == 0:
            DNA.append('A')
        elif number == 1:
            DNA.append('T')
        elif number == 2:
            DNA.append('G')
        else:
            DNA.append('C')
        loops -= 1
    return(DNA)