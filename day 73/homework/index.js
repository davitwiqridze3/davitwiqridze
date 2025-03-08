// მასივი ობიექტების
const people = [
    { name: "ნიკა", age: 25, height: 175, gender: "კაცი" },
    { name: "ანა", age: 30, height: 165, gender: "ქალი" },
    { name: "გიორგი", age: 22, height: 180, gender: "კაცი" },
    { name: "მარიამი", age: 28, height: 160, gender: "ქალი" },
  ];
  
  // ფუნქცია თითოეული ობიექტის დასაბეჭდად
  function printPeopleInfo(people) {
    people.forEach((person, index) => {
      console.log(`ადამიანი ${index + 1}:`);
      console.log(`სახელი: ${person.name}`);
      console.log(`ასაკი: ${person.age}`);
      console.log(`სიმაღლე: ${person.height}`);
      console.log(`სქესი: ${person.gender}`);
      console.log("-------------------------");
    });
  }
  
  // ფუნქციის გამოძახება
  printPeopleInfo(people);
  