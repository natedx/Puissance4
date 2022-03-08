const Game = require('../src/game')
const sinon = require('sinon');
const { expect, assert } = require('./test-helper');

describe('Game', () => {
  /*it('given a new game when started then it prints the welcome message', async () => {
    // ARRANGE
    const mockTerminal = { print: sinon.stub(), readInput: sinon.stub() }
    const mockGrid = { insertToken : sinon.stub() }
    const newGame = new Game({ terminal: mockTerminal, grid: mockGrid })
    mockTerminal.print.resolves()

    // ACT
    await newGame.start()

    // ASSERT
    const welcomeMessage = 'Let\'s a goooooo!'
    expect(mockTerminal.print).to.have.been.calledOnceWith(welcomeMessage)
  });*/

  it('given a new game when started then it asks for yellow player to start', async () => {
    // ARRANGE
    const mockTerminal = { print: sinon.stub(), readInput: } }
    const mockGrid = { insertToken : sinon.stub() }

    mockTerminal.print.resolves()

    const newGame = new Game({ terminal: mockTerminal, grid: mockGrid })


    // ACT
    await newGame.start()


    // ASSERT
    const yellowTurnMessage = 'It\'s Yellow\'s turn to play: '
    expect(mockTerminal.readInput).to.have.been.calledOnceWith(yellowTurnMessage)
  })
/*
  it('given yellow has inputed a valid column to play in, then the grid is updated correctly', async () => {
    const mockTerminal = { print: sinon.stub(), readInput: sinon.stub() }
    const mockGrid = { insertToken : sinon.stub() }
    

    const newGame = new Game({ terminal: mockTerminal, grid: mockGrid })

    await newGame.start()

    mockTerminal.print.resolves()
    mockTerminal.readInput.resolves(2)
    
    // ...
    expect(mockGrid.insertToken).to.have.been.calledOnceWithExactly(2, 1);
  });

  it('given a new game when started then it asks for red player to start', async () => {
    // ARRANGE
    const mockTerminal = { print: sinon.stub(), readInput: sinon.stub() }
    const mockGrid = { insertToken : sinon.stub() }
    mockTerminal.print.resolves()
    mockTerminal.readInput.resolves(1)

    const newGame = new Game({ terminal: mockTerminal, grid: mockGrid })

    // ACT
    await newGame.start()

    // ASSERT
    const yellowTurnMessage = 'It\'s Yellow\'s turn to play: '
    const redTurnMessage = 'It\'s Red\'s turn to play: '
    console.log(mockTerminal.readInput)
  })*/
})