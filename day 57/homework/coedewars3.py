def feast(beast, dish):
   
    beast = beast.replace(" ", "").replace("-", "")
    dish = dish.replace(" ", "").replace("-", "")
    
    
    return beast[0] == dish[0] and beast[-1] == dish[-1]
