// 1. ორი მატრიცის ჯამი
def add_matrices(matrix1, matrix2):
    rows = len(matrix1)
    cols = len(matrix1[0])
    result = [[matrix1[i][j] + matrix2[i][j] for j in range(cols)] for i in range(rows)]
    return result

// 2. მატრიცის ტრანსპონირება
def transpose_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[matrix[j][i] for j in range(rows)] for i in range(cols)]
    return transposed

//3. დიაგონალური ელემენტების ჯამი
def diagonal_sums(matrix):
    n = len(matrix)
    main_diag_sum = sum(matrix[i][i] for i in range(n))
    secondary_diag_sum = sum(matrix[i][n - 1 - i] for i in range(n))
    return main_diag_sum, secondary_diag_sum

// 4. ბონუს ამოცანა: ფუნქცია, რომელიც აბრუნებს რიგებისა და სვეტების ჯამებს
def row_and_column_sums(matrix):
    n = len(matrix)
    row_sums = [sum(row) for row in matrix]
    col_sums = [sum(matrix[i][j] for i in range(n)) for j in
