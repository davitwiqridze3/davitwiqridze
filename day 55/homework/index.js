// მომხმარებლისგან ორი რიცხვის შეყვანა
let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

// ოპერაციის არჩევა
let operation = prompt("გსურთ მიმატება (+) თუ გამოკლება (-)?");

// შედეგის გამოთვლა
let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else {
    alert("არასწორი ოპერაცია. სცადეთ თავიდან.");
}

// შედეგის ჩვენება
if (result !== undefined) {
    alert(`შედეგი: ${result}`);
}
