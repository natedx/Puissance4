const Grid = require('../src/grid')
const { expect } = require('./test-helper')


describe('Grid', () => {
    describe('display', () => {
        it('should display empty grid', () => {
            // ARRANGE
            const grid = new Grid()

            // ACT
            const gridString = grid.displayGrid();

            // ASSERT
            const expectedGridString =
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n"

            expect(gridString).to.be.equal(expectedGridString);
        })
        it("should insert one token at the bottom of first column", () => {
            const grid = new Grid();

            grid.insertToken(0);
            const gridString = grid.displayGrid();
            // ASSERT
            const expectedGridString =
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                "0 . . . . . . \n"

            expect(gridString).to.be.equal(expectedGridString);
        })
    })
})

