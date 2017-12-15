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
      expect(game.addMove.bind(game)).toThrow()
      expect(game.addMove.bind(game, 1)).toThrow()
      expect(game.addMove.bind(game, 1, 1)).not.toThrow()
      expect(game.addMove.bind(game, 1, 1, 1)).toThrow()
    })

    it('throws an exception if the coordinates are not in range', () => {
      expect(game.addMove.bind(game, 0, 0)).toThrow()
      expect(game.addMove.bind(game, 10, 10)).toThrow()
    })

  })
})
