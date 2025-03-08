// ადამიანის კონსტრუქტორი
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // მანქანის კონსტრუქტორი
  function Car(name, year, engine, horsepower, color, owner) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
    this.owner = owner;
  }
  
  // ადამიანების ობიექტები
  const owner1 = new Person('Giorgi', 30);
  const owner2 = new Person('Ana', 25);
  const owner3 = new Person('Nino', 40);
  
  // მანქანის ობიექტები
  const car1 = new Car('Toyota Corolla', 2020, 'V4', 130, 'Silver', owner1);
  const car2 = new Car('Honda Civic', 2022, 'V6', 160, 'Red', owner2);
  const car3 = new Car('Ford Mustang', 2021, 'V8', 450, 'Blue', owner3);
  
  // კონსოლში გამოიტანეთ მანქანები და მათი მფლობელები
  console.log(car1);
  console.log(car2);
  console.log(car3);
  