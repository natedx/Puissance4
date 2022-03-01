
class Grid {

    data = []

    constructor() {
        // Building grid
        for (let i = 0; i<6; i++) {
            this.data.push([])
            for (let j = 0; j < 7; j++) {
                this.data[i].push(0);
            }
        }
    }

    displayGrid() {
        let string = ""
        for (let i = 0; i<6; i++) {
            for (let j = 0; j < 7; j++) {
              string += this.data[i][j] === 1 ? '0 ' : '. '
            }
            string += "\n"
        }
        return string
    }

    insertToken(i) {
        this.data[5][i] = 1;
    }
}

module.exports = Grid

