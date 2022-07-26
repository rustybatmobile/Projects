function spiralMatrix(m, n, mat) {
    let i, k = 0; l = 0;
    let last_row = m -1; last_col = n-1;
    while(k <= last_row && l <= last_col) {
        for(i = l; i <= last_col; i++) {
            console.log(mat[k][i]);
        }
        k++;

        for(let i = k; i <= last_row; i++) {
            console.log(mat[i][last_col]);
        }
        last_col--;
        if(k <= last_row) {
            for(let i = last_col; i >= l; i++) {
                console.log(mat[last_row][i]);
            }
            last_row--;
        }

        if(l <= last_col) {
            for(let i = last_row; i >= k; i--) {
                console.log(mat[i][l])
            }
            l++
        }
    }
}

const arr = [["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"], ["u", "v", "m", "n", "o"], ["p", "q", "r", "s", "t"]];
spiralMatrix(4, 5, arr)