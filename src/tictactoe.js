export default class {

  constructor() {
    this.board = [
      new Array(3),
      new Array(3),
      new Array(3)
    ]
  }

  addMove (row, column) {
    if (arguments.length !== 2) {
      throw 'Invalid arguments, we expect the Row and the Column numbers'
    }

    if (row < 1 || row > this.board.length || column < 1 || column > this.board[0].length){
      throw 'Invalid range'
    }

  }
}
