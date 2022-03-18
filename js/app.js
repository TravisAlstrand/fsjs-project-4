/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.getElementById('btn__reset'); // start button selector
const phraseUL = document.getElementById('phrase').firstElementChild; // ul to append phrase
const keysDiv = document.getElementById('qwerty'); // keyboard div selector
const keyBtns = document.querySelectorAll('.key'); // on screen key buttons
const hearts = document.querySelectorAll('img[alt="Heart Icon"'); // array of hearts
const startScreen = document.getElementById('overlay'); // start screen overlay
const winLoseH1 = document.querySelector('h1');

let game = null; // game variable
let startScreenActive = true; // bool is start/win/lose screen is active

startBtn.addEventListener('click', () => {

    // if on win or lose screen
    if (startScreenActive === false) {
        game.resetGame();
    }

    // create new game class
    game = new Game;

    // call start game function
    game.startGame();

    startScreenActive = false;
});

// listen for clicks, if it's a key, send the letter to handleInteraction()
keysDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('key'))
    {
        // call handle interaction function
        game.handleInteraction(e.target.innerHTML);
    }
});

// listen for keyboard clicks
document.addEventListener('keyup', (e) => {

    // if not on start screen and is a letter key
    if (startScreenActive === false && e.code.startsWith("Key")) {

        // set variable of key's letter to lower case
        const letter = e.code.substring(3, 4).toLowerCase();

        // call handle interaction function with letter
        game.handleInteraction(letter);
    }
});