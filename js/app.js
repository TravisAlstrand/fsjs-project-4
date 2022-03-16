/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.getElementById('btn__reset');

const game = new Game();

startBtn.addEventListener('click', () => {
    game.startGame();
});