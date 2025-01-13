// 1. ფუნქცია, რომელიც წუთებს წამებად გარდაქმნის
function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

// გამოყენება
console.log(convertMinutesToSeconds(5)); // დაბრუნებული შედეგი: 300


// 2. ფუნქცია, რომელიც აბრუნებს პირველი ორი რიცხვის ჯამის ნამრავლს მესამე რიცხვზე
function sumAndMultiply(a, b, c) {
    return (a + b) * c;
}

// გამოყენება
console.log(sumAndMultiply(2, 3, 4)); // დაბრუნებული შედეგი: 20


// 3. ფუნქცია, რომელიც აბრუნებს true-ს თუ პირველი რიცხვი მეტია მეორეზე, და false-ს თუ არა (if-ის გარეშე)
function isFirstGreaterThanSecond(a, b) {
    return a > b;
}

// გამოყენება
console.log(isFirstGreaterThanSecond(10, 5)); // დაბრუნებული შედეგი: true
console.log(isFirstGreaterThanSecond(3, 8));  // დაბრუნებული შედეგი: false


// 4. ფუნქცია, რომელიც კონსოლში გამოიტანს "Element:" და გადაცემულ ელემენტს
function printElement(element) {
    console.log("Element:", element);
}

// გამოყენება
printElement("Hello"); // კონსოლში დაიბეჭდება: Element: Hello


// 5. ფუნქცია, რომელიც იღებს ელემენტის id-ს და სტრინგს, და ჩასვამს სტრინგს შესაბამის ელემენტში
function insertTextById(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = text;
    } else {
        console.log("Element not found");
    }
}

// გამოყენება (HTML-ში id="myElement"-ის მქონე ელემენტზე ტექსტის ჩასაწერად)
insertTextById("myElement", "Hello, world!");
// თუ ელემენტი ვერ მოიძებნება, კონსოლში დაიბეჭდება "Element not found"