const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) { // checking horizontally
    if (l.includes(word)) return true;
  }
  letters = transpose(letters);
  const verticalJoin = letters.map(ls => ls.join(''));
  console.log(letters);
  for (l of verticalJoin) { // checking vertically
    if (l.includes(word)) return true;
  }
  return false;
};
 

const transpose = function(matrix) {
  //Define a empty matrix with rows = column of inp and vice versa
  let rows = matrix.length; //rows of inp mat
  let columns = matrix[0].length; //columns of inp mat

  let outMatrix = []; //output mat

  for (let i = 0; i < columns; i++) { // i here is rows for output mat
    outMatrix[i] = []; // initialize rows
    outMatrix[i].length = rows; // set column length which is == rows of inp mat
  }

  //loop through inp mat and assign value to out mat
  for (let i = 0; i < matrix.length; i++) { // i = rows of inp mat
    for (let j = 0; j < matrix[i].length; j++) { // j = column of inp mat
      outMatrix[j][i] = matrix[i][j]; // for output mat i and j are inverse
    }
  }
  return outMatrix;
};
module.exports = wordSearch;


