/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// create the Game class
class Game {

    constructor() {

        // used to track missed guess attempts
        this.missed = 0;

        // array of phrases
        this.phrases = [
            new Phrase('Whats your favorite scary movie'),
            new Phrase('I want to play a game'),
            new Phrase('I see dead people'),
            new Phrase('Sometimes dead is better'),
            new Phrase('We all float down here')
          ];

        // active phrase in game
        this.activePhrase = null;
    }

    // method to get a random phrase from phrases property
    getRandomPhrase()
    {
        // get a random number between 0 and length of phrases property
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);

        // return phrase at phrases index of random number
        return this.phrases[randomPhraseIndex];
    }

    // initialize game
    startGame()
    {
        // hide start screen
        startScreen.style.display = 'none';

        // call getRandomPhrase function
        const newRandomPhrase = this.getRandomPhrase();

        // define active phrase property of game class
        this.activePhrase = newRandomPhrase;

        // add phrase to display
        this.activePhrase.addPhraseToDisplay();
    }

    // handles events on user activity
    handleInteraction(letter)
    {
        let clickedBtn; // empty variable for clicked button

        // iterate through on screen keys
        for (let i = 0; i < keyBtns.length; i++) {

            // if key has same letter as 'letter'
            if (keyBtns[i].innerHTML === letter) {

                // assign clicked button var this on screen key
                clickedBtn = keyBtns[i];
            }
        }

        // disable clicked button
        clickedBtn.disabled = true;

        // send clicked letter to checkLetter() to see if it matches phrase
        let results = this.activePhrase.checkLetter(letter);

        // if returned 'matched' variable is empty (no match)
        // call remove life function & change button color
        if (results.length === 0) {
            this.removeLife();
            clickedBtn.classList.add('wrong');
        } else {
            // if results is an LI, change button color, call show matched letter
            clickedBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(results);
        }

        // check to see if player has won each guess
        let winResults = this.checkForWin();

        // if player won, end game with 'won' parameter
        if (winResults === true) {
            this.gameOver('won');
        }
    }

    removeLife()
    {
        // increment missed counter by 1
        this.missed++;

        // replace a heart image with an empty heart image
        hearts[this.missed - 1].src = '../images/lostHeart.png';

        // if player misses 5 times, call end game function
        if (this.missed === 5) {
            this.gameOver('lost');
        }
    }

    checkForWin() {

        // find all LIs with the 'show' class
        const liCorrect = document.querySelectorAll('.show');

        // find all phrase letters with 'letter' class
        const phraseLetters = document.querySelectorAll('.letter');

        // if all LIs in phrase have 'show' class call end game with 'won'
        if (liCorrect.length === phraseLetters.length)
        {
            return true;
        } else {
            return null;
        }
    }

    gameOver(wonOrLost) {

        // show start screen overlay
        startScreen.style.display = 'inherit';

        // if player lost, show lose screen
        // if player won, show win screen
        if (wonOrLost === 'lost')
        {
            startScreen.classList.remove('start');
            startScreen.classList.add('lose');
            winLoseH1.innerHTML = 'Bummer! You Lost!'
        } else if (wonOrLost === 'won') {
            startScreen.classList.remove('start');
            startScreen.classList.add('win');
            winLoseH1.innerHTML = 'Nice Job! You Won!';
        }
    }

    resetGame() {

        // remove all phrase LI elements from UL
        this.activePhrase.letterLIs.forEach(li => {
            li.remove();
        });

        // remove chosen & wrong classes,
        // add key class and enable every button
        keyBtns.forEach(btn => {
            btn.classList.remove('chosen', 'wrong');
            btn.classList.add('key');
            btn.disabled = false;
        });

        // refill all hearts
        hearts.forEach(heart => {
            heart.src = '../images/liveHeart.png';
        });

        // remove win or lose screen
        startScreen.style.display = 'none';
    }
}
