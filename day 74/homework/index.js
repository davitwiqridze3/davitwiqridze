// მანქანის კონსტრუქტორი
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Honda', 'Civic', 2022);
  const car3 = new Car('Ford', 'Mustang', 2021);
  
  // ცხოველის კონსტრუქტორი
  function Animal(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  
  const animal1 = new Animal('Bella', 'Dog', 'Bark');
  const animal2 = new Animal('Whiskers', 'Cat', 'Meow');
  const animal3 = new Animal('Milo', 'Bird', 'Chirp');
  
  // მოსწავლის კონსტრუქტორი
  function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  
  const student1 = new Student('Ana', 14, '8th');
  const student2 = new Student('Giorgi', 16, '10th');
  const student3 = new Student('Keti', 15, '9th');
  
  // კონსოლში გამოიტანეთ ობიექტები
  console.log(car1, car2, car3);
  console.log(animal1, animal2, animal3);
  console.log(student1, student2, student3);
  