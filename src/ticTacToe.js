class TicTacToe {
  constructor() {
    this.grid = new Array(9);
  }
  add(player, posX, posY) {
    const i = (posY - 1) * 3 + (posX - 1)
    this.grid[i] = player
  }
}
export default TicTacToe
