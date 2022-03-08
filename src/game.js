class Game {
    constructor({terminal, grid}) {
        this.terminal = terminal;
        this.grid = grid;
        this.turn = 1;
    }

    async start() {
        console.log("BBB : ");
        const welcomeMessage = 'Let\'s a goooooo!';
        await this.terminal.print(welcomeMessage);

        while(gameisOn) {

            this.turn = 1;
            await this.yellowToPlay();

            this.turn = 2;
            await this.redToPlay();
        }
        
    }

    async yellowToPlay() {
        const yellowTurnMessage = 'It\'s Yellow\'s turn to play: ';
        const yellowColumn = await this.terminal.readInput(yellowTurnMessage);
        this.grid.insertToken(yellowColumn, this.turn);
    }

    async redToPlay() {
        const redTurnMessage = 'It\'s Red\'s turn to play: ';
        const redColumn = await this.terminal.readInput(redTurnMessage);
        this.grid.insertToken(redColumn, this.turn);
    }
}
  
module.exports = Game;
