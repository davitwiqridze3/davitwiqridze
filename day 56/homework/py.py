
# N რიცხვის შემოტანა
N = int(input("შეიტანეთ N რიცხვი: "))
a = []

# N რიცხვის შეყვანა
for i in range(N):
    num = int(input(f"შეიტანეთ {i+1}-ე რიცხვი: "))
    a.append(num)

# მასივის შებრუნებული გამოტანა
a.reverse()
for num in a:
    print(num)
