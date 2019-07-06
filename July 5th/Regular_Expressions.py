import re

#Python Regular Expressions Exercises

#Write a program to test that a string contains only a certain set of characters.
chars = '[a-z]'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains lowercase letters.")
else:
    print("No, this string does not contain a lowercase letter.")

#Write a program that matchas a string that has an 'a' followed by zero or more b's.
chars = 'ab*'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains an 'a' and zero or more b's.")
else:
    print("No, this string doesn't contain an 'a' and zero or more b's.")

#Write a program that matches a string that has an 'a' followed by one or more b's.
chars = 'ab+'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains an 'a' and one or more b's.")
else:
    print("No, this string doesn't contain an 'a' and one or more b's.")

#Write a program that matches a string that has an 'a' followed by zero or one b.
chars = 'ab?'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains an 'a' and zero or one b.")
else:
    print("No, this string doesn't contain an 'a' and zero or one b.")

#Write a program that matches a string that has an 'a' followed by two or three b's.
chars = 'ab{2,3}'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains an 'a' and two or three b's.")
else:
    print("No, this string doesn't contain an 'a' and two or three b's.")

#Write a program that matches a string that has an 'a' followed by anything, ending in 'b'.
chars = '^a.b$'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string contains an 'a' followed by anything, ending in 'b'.")
else:
    print("No, this string doesn't contain an 'a' followed by anything, ending in 'b'.")

#Write a program that matches a word at the beginning of a string.
chars = '\bab'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string begins with 'ab'.")
else:
    print("No, this string doesn't begin with 'ab'.")

#Write a program that matches a word at the end of a string.
chars = 'ab\b'
string = input("Please enter a string: ")
if re.search(chars, string):
    print("Yes, this string ends with 'ab'.")
else:
    print("No, this string doesn't end with 'ab'.")