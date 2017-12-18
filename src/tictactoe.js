function setCurrentPlayerAtGivenPosition (row, column, board, player) {
  const index = getBoardIndexFromGivenPosition(row, column, board)
  board[index] = player
}

function getBoardIndexFromGivenPosition (row, column, board) {
  return (row - 1) * Math.sqrt(board.length) + (column - 1)
}

export default class {

  constructor() {
    this.board = new Array(Math.pow(3, 2))
    this.player = 'X'
  }

  addMove (row, column) {
    if (arguments.length !== 2) {
      throw 'Invalid argument, we expect the Row and the Column numbers'
    }

    if (row < 1 || row > Math.sqrt(this.board.length) || column < 1 || column > Math.sqrt(this.board.length)){
      throw 'Invalid range'
    }
   
    setCurrentPlayerAtGivenPosition(row, column, this.board, this.player)

    // sets the next player
    this.player = 'O';

    return this;
  }

  getValueAt (row, column) {
    return this.board[(row - 1) * Math.sqrt(this.board.length) + (column - 1)]
  }

  

}
