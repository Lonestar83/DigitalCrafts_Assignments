file_name = "Email_List.txt"
duplicate_free_emails = []

with open(file_name) as file_object:
    contents = file_object.read()

emails = contents.replace("\n", "").split(', ')

for email in emails:
    if email not in duplicate_free_emails:
        duplicate_free_emails.append(email)

print(duplicate_free_emails)

string = (', ').join(duplicate_free_emails)

print(string)

with open("duplicate_free_email_list.txt", "w") as file_object2:
    file_object2.write(string)