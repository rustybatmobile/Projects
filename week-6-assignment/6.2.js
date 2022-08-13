const spiralMatrix = function (matrix) {
	const arr = [];

	//set the bounds of the matrix
	let rowTop = 0
	let rowBottom = matrix.length - 1
	let colLeft = 0
	let colRight = matrix[0].length - 1

	const matrixSize = matrix.length * matrix[0].length

	//while there are still more elements in the matrix not in the resultant array
	while (arr.length < matrixSize) {
		//iterate from bound to bound in a spiral pattern and push each element to the array

		//iterate right through the top row
		for (let col = colLeft; col <= colRight; col++) {
			arr.push(matrix[rowTop][col])
		}
		//lower the top row bound
		rowTop++

		//iterate down through the right column
		for (let row = rowTop; row <= rowBottom; row++) {
			arr.push(matrix[row][colRight])
		}
		//move the right column bound left
		colRight--

		//if every element has been iterated over, end the loop
		if (arr.length >= matrixSize) {
			break
		}

		//iterate left through the bottom row
		for (let col = colRight; col >= colLeft; col--) {
			arr.push(matrix[rowBottom][col])
		}
		//raise the bottom row bound
		rowBottom--

		//iterate up through the left column
		for (let row = rowBottom; row >= rowTop; row--) {
			arr.push(matrix[row][colLeft])
		}
		//move the left column bound to the right
		colLeft++
	}
	//return the resultant array
	return arr
};

const arr = [["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"], ["u", "v", "m", "n", "o"], ["p", "q", "r", "s", "t"]];
console.log(spiralMatrix(arr))

//Time complexity: O(n^2) // There's a while loop and a few loops inside of it, but the inside ones are not nested within each other. 
//So, let's count all those for loops as just one and one parent while loop. So --> O(n^2)

//Space complexity: O(m*n) //Where m is the no of rows and n is the no of columns and arr contains these many items. 



