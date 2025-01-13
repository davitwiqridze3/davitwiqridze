function manualFilter(array, ...elementsToRemove) {
    return array.filter(item => !elementsToRemove.includes(item));
}

// გამოყენების მაგალითი:
const myArray = [1, 2, 3, 4, 5, 6];
const result = manualFilter(myArray, 2, 4); // ამოიღებს 2 და 4

console.log(result); // [1, 3, 5, 6]
