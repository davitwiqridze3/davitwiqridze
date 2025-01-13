//1. ფუნქცია ორი მატრიცის ჯამის გამოსათვლელად
def add_matrices(matrix1, matrix2):
    rows = len(matrix1)
    cols = len(matrix1[0])
    result = [[matrix1[i][j] + matrix2[i][j] for j in range(cols)] for i in range(rows)]
    return result

//2. ფუნქცია მატრიცის ტრანსპონირებისათვის (რიგების და სვეტების გაცვლა)
def transpose_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    transposed = [[matrix[j][i] for j in range(rows)] for i in range(cols)]
    return transposed

//3. ფუნქცია დიაგონალური ელემენტების ჯამის გამოსათვლელად
def diagonal_sums(matrix):
    n = len(matrix)
    main_diag_sum = sum(matrix[i][i] for i in range(n))
    secondary_diag_sum = sum(matrix[i][n - 1 - i] for i in range(n))
    return main_diag_sum, secondary_diag_sum

// მაგალითი გამოყენება
matrix1 = [[1, 3], [1, 4]]
matrix2 = [[4, 1], [2, 2]]

print("მატრიცების ჯამი:", add_matrices(matrix1, matrix2))
print("ტრანსპონირებული მატრიცა:", transpose_matrix(matrix1))
print("დიაგონალური ჯამები:", diagonal_sums(matrix1))