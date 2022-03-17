/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.getElementById('btn__reset'); // start button selector
const keysDiv = document.getElementById('qwerty'); // keyboard div selector
const hearts = document.querySelectorAll('img[alt="Heart Icon"'); // array of hearts
console.log(hearts);
let game = null; // game variable

startBtn.addEventListener('click', () => {

    // create new game class
    game = new Game;

    // call start game function
    game.startGame();
});

// listen for clicks, if it's a key, send the letter to handleInteraction()
keysDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('key'))
    {
        // call handle interaction function
        game.handleInteraction(e.target.innerHTML);

        // add chosen class to button
        e.target.className = 'chosen';

        // disable button
        e.target.disabled = true;
    }
});