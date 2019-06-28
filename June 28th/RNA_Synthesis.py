import DNA_Synthesis



def generate_RNA():
    DNA_array = DNA_Synthesis.generate_DNA()
    RNA = []
    for x in range(0, len(DNA_array)):
        if DNA_array[x] == 'A':
            RNA.append('U')
        if DNA_array[x] == 'T':
            RNA.append('A')
        if DNA_array[x] == 'C':
            RNA.append('G')
        if DNA_array[x] == 'G':
            RNA.append('C')
    return(RNA)

generate_RNA()