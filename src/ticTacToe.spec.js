import TicTacToe from'./ticTacToe'

describe('Tic Tac Toe', () => {
  describe('check grid', () => {
    it('grid to be array', () => {
      const ttt = new TicTacToe()
      expect(Array.isArray(ttt.grid)).toBe(true)
    })
    it('grid need 9 fields', () => {
      const ttt = new TicTacToe()
      expect(ttt.grid.length).toBe(9)
    })
  })
  describe('add x to field', () => {
    it('adds to 1,1',() => {
      const ttt = new TicTacToe()
      ttt.add('x', 1, 1)
      expect(ttt.grid[0]).toBe('x')
    })
    it('adds to 2,2',() => {
      const ttt = new TicTacToe()
      ttt.add('x', 2, 2)
      expect(ttt.grid[4]).toBe('x')
    })
  })
})

