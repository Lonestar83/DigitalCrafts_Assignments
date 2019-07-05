import collections

string = input("Enter a string: ")

chars = "`*_{}[]()>#+-.!$?"

for c in chars:
    string = string.replace(c, " ")

array = sorted(string.lower().split())

print('\n')
print(array)

counter = collections.Counter(array)
most_common_word = counter.most_common(1)

print('\n')
print(f'The most common word in the string is \'{most_common_word[0][0]}\'.')
