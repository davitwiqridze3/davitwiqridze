import math

def count_area(*args):
    if len(args) == 2:
        # მართკუთხედის ფართობი
        length, width = args
        area = length * width
        return f"მართკუთხედის ფართობი: {area}"
    
    elif len(args) == 1:
        # წრის ფართობი
        radius = args[0]
        area = math.pi * radius ** 2
        return f"წრის ფართობი: {area}"
    
    elif len(args) == 3:
        # სამკუთხედის ფართობი (ჰერონის ფორმულა)
        a, b, c = args
        s = (a + b + c) / 2  # ნახევარპერიმეტრი
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return f"სამკუთხედის ფართობი: {area}"
    
    else:
        return "გთხოვთ, შეიყვანოთ სწორი პარამეტრები ფიგურისთვის."

# მაგალითი გამოყენება:
print(count_area(5, 10))       # მართკუთხედის ფართობი: სიგრძე 5, სიგანე 10
print(count_area(7))           # წრის ფართობი: რადიუსი 7
print(count_area(3, 4, 5))     # სამკუთხედის ფართობი: გვერდები 3, 4 და 5

    
