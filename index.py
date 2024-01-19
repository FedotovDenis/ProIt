import os

filename = "new_file.txt"

with open(filename, "w") as f:
    f.write("new file.")

print("downloaded.")

print(os.listdir())


