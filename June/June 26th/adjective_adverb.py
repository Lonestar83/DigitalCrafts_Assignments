boolean = True
while boolean:
  adjective = input("Enter an adjective: ")
  adjective = adjective.lower()
  adverb = ""
  if adjective == "good":
    adverb = "well"
  elif adjective == "fast":
    adverb = "fast"
  elif adjective == "hard":
    adverb = "hard"
  elif adjective[len(adjective) - 1] == "y":
    for index in range(0, len(adjective)):
      if adjective[index] != "y":
        adverb += adjective[index]
      else:
        adverb += "ily"
  elif adjective[len(adjective) - 1] == "c":
    adverb = adjective + "ally"
  else:
    adverb = adjective + "ly"
  print(f"The adverb is {adverb}.")