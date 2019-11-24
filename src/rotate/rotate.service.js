const rotate = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const execRotate = matrix => (
  rotate(matrix.reverse())
);

const rotatePicute = (grid, k) => {
  let arrRotate = [...grid];
  const time = k % 4;
  if (time > 0) {
    for (let i = 0; i < time; i++) {
      arrRotate = execRotate(arrRotate);
    }
  }
  return arrRotate;
};

module.exports = { rotatePicute };
