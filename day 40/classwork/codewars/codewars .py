def capitalize(s):
    even_capitalized = ""
    odd_capitalized = ""
    
    for index in range(len(s)):
        if index % 2 == 0:
            even_capitalized += s[index].upper()
            odd_capitalized += s[index]
        else:
            even_capitalized += s[index]
            odd_capitalized += s[index].upper()
    