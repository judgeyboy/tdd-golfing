import Game from './tictactoe'

describe('tic tac toe specs', () => {

  let game

  it('game exists', () => {
    expect(Game).toBeDefined()
  })

  describe('addMove method', () => {

    beforeEach(() => {
      game = new Game()
    })

    it('game has a addMove method', () => {
      expect(game.addMove).toBeDefined()
    })

    it('game has a addMove method with two arguments', () => {
      expect(() => game.addMove()).toThrow()
      expect(() => game.addMove(1)).toThrow()
      expect(() => game.addMove(1, 1)).not.toThrow()
      expect(() => game.addMove(1, 1, 1)).toThrow()
    })

    it('throws an exception if the coordinates are not in range', () => {
      expect(() => game.addMove(0, 0)).toThrow()
      expect(() => game.addMove(10, 10)).toThrow()
    })

    it('it calls addMove with 2, 2 and we expect an X on this position', () => {
      expect(game.addMove(2, 2).getValueAt(2,2)).toBe('X')
    })

  })
})
