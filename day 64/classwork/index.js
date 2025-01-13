function checkNumbers(firstNumber, secondNumber) {
    // ვამოწმებთ პირობებს
    if (firstNumber % 2 !== 0 && firstNumber > secondNumber && secondNumber % 2 === 0) {
        return true;
    }
    return false;
}

// მაგალითი გამოყენება:
console.log(checkNumbers(7, 4)); // true (7 კენტია და მეტია 4-ზე, ხოლო 4 ლუწია)
console.log(checkNumbers(8, 4)); // false (8 ლუწია)
console.log(checkNumbers(7, 5)); // false (7 არ არის მეტზე 5-ზე)
console.log(checkNumbers(7, 3)); // false (3 არ არის ლუწი)
