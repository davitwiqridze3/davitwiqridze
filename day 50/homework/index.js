// 1. ფუნქცია, რომელიც დააბრუნებს ორი მატრიცის ჯამს
function matrixSum(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

// ტესტი
const matrix1 = [[1, 3], [1, 4]];
const matrix2 = [[4, 1], [2, 2]];
console.log(matrixSum(matrix1, matrix2)); // -> [[5, 4], [5, 5]]


// 2. ფუნქცია, რომელიც მატრიცას რიგებს და სვეტებს გაუცვლის (ტრანსპოზირება)
function transposeMatrix(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

// ტესტი
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transposeMatrix(matrix)); // -> [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


// 3. ფუნქცია, რომელიც nXn მატრიცის დიაგონალების ჯამს დააბრუნებს
function diagonalSums(matrix) {
    const n = matrix.length;
    let mainDiagonalSum = 0, antiDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        antiDiagonalSum += matrix[i][n - i - 1];
    }

    return { mainDiagonalSum, antiDiagonalSum };
}

// ტესტი
const squareMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(diagonalSums(squareMatrix)); // -> { mainDiagonalSum: 15, antiDiagonalSum: 15 }