class CPU {
  isEmptyCell(matrix, cell) {
    return matrix[cell] === null;
  }

  findAnEmptyCell(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      if (this.isEmptyCell(matrix, i)) {
        return i;
      }
    }
    
    return -1;
  }

  getEasyModeMove(matrix) {
    let index = -1;
    let center = 4;

    if (this.isEmptyCell(matrix, center)) {
      index = center;
    } else {
      index = this.findAnEmptyCell(matrix);
    }

    return index;
  }
}

export default new CPU();
