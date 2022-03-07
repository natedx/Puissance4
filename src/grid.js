class Grid {

    data = []
    NB_COLUMNS = 7
    NB_ROWS = 6

    constructor() {
        // Building grid
        for (let i = 0; i < this.NB_ROWS; i++) {
            this.data.push([])
            for (let j = 0; j < this.NB_COLUMNS; j++) {
                this.data[i].push(0);
            }
        }
    }

    displayGrid() {
        let string = ""
        for (let i = 0; i < this.NB_ROWS; i++) {
            for (let j = 0; j < this.NB_COLUMNS; j++) {
                let value = this.data[i][j]
                if (value === 1) {
                    string += '0 '
                } else if (value === 2) {
                    string += 'X '
                } else {
                    string += '. '
                }
            }
            string += "\n"
        }
        return string
    }

    insertToken(j, playerNb) {
        if (j < 0 || j > this.NB_COLUMNS - 1) {
            throw new Error("Column index out of range")
        }
        for (let i = this.NB_ROWS - 1; i >= 0; i--) {
            if (this.data[i][j] === 0) {
                this.data[i][j] = playerNb
                break
            } else {
                if (i === 0) {
                    throw new Error("This column is full!")
                }
            }
        }
    }
}

module.exports = Grid

