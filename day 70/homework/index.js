function processMatrix(matrix) {
    const n = matrix.length;
  
    console.log("რიგები:");
    matrix.forEach((row, rowIndex) => {
      console.log(`რიგი ${rowIndex + 1}:`, row);
    });
  
    console.log("\nსვეტები:");
    for (let col = 0; col < n; col++) {
      const column = matrix.map(row => row[col]);
      console.log(`სვეტი ${col + 1}:`, column);
    }
  
    console.log("\nდიაგონალები:");
    const mainDiagonal = [];
    const secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
      mainDiagonal.push(matrix[i][i]); // მთავარი დიაგონალის ელემენტები
      secondaryDiagonal.push(matrix[i][n - i - 1]); // მეორადი დიაგონალის ელემენტები
    }
    console.log("მთავარი დიაგონალი:", mainDiagonal);
    console.log("მეორადი დიაგონალი:", secondaryDiagonal);
  }
  
  // ტესტისთვის მაგალითი
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  processMatrix(matrix);
  