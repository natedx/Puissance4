const Grid = require('../src/grid')
const { expect, assert } = require('./test-helper')


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
    })
})
describe('Grid', () => {
    describe('insertion one color', () => {
        it("should insert one token at the bottom of first column", () => {
            const grid = new Grid();

            grid.insertToken(0, 1);
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

        it("should insert two tokens on top of each other", () => {
            const grid = new Grid();

            grid.insertToken(0, 1);
            grid.insertToken(0, 1);
            const gridString = grid.displayGrid();
            // ASSERT
            const expectedGridString =
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                "0 . . . . . . \n" +
                "0 . . . . . . \n"

            expect(gridString).to.be.equal(expectedGridString);
        })

        it("should throw error when I insert a 7th token in the first column", () => {
            // ARRANGE
            const grid = new Grid();

            grid.insertToken(0, 1);
            grid.insertToken(0, 1);
            grid.insertToken(0, 1);
            grid.insertToken(0, 1);
            grid.insertToken(0, 1);
            grid.insertToken(0, 1);

            // ACT
            // ASSERT

            assert.throws(() => {grid.insertToken(0, 1)}, Error, "This column is full!")
        })

        it("should throw error when inserting token in 8th column", () => {
            // ARRANGE
            const grid = new Grid();
            // ACT
            assert.throws(() => {grid.insertToken(7, 1)}, Error, "Column index out of range")
        })

        it("should throw error when inserting token in 0th column", () => {
            // ARRANGE
            const grid = new Grid();
            // ACT
            assert.throws(() => {grid.insertToken(-1, 1)}, Error, "Column index out of range")
        })
    })
    describe("insertion two colors", () => {
        it("should display stacked tokens, yellow above red, when inserting red then yellows", () => {
            // ARRANGE
            const grid = new Grid();
            // ACT
            grid.insertToken(0, 1)
            grid.insertToken(0, 2)
            // ASSERT
            const expectedGridString =
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                "X . . . . . . \n" +
                "0 . . . . . . \n"
            const gridString = grid.displayGrid();

            expect(gridString).to.be.equal(expectedGridString);
        })

        it("should show tokens in two different columns", () => {
            // ARRANGE
            const grid = new Grid();
            // ACT
            grid.insertToken(0, 1)
            grid.insertToken(3, 2)
            // ASSERT
            const expectedGridString =
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                ". . . . . . . \n" +
                "0 . . X . . . \n"
            const gridString = grid.displayGrid();

            expect(gridString).to.be.equal(expectedGridString);
        })
    })
})

