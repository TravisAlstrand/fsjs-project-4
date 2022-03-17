/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// create the Game class
class Game {

    constructor() {

        // create empty phrase object variable
        this.phraseObject = null;

        // used to track missed guess attempts
        this.missed = 0;

        // array of phrases
        this.phrases = [
            {phrase: 'Whats your favorite scary movie'},
            {phrase: 'I want to play a game'},
            {phrase: 'I see dead people'},
            {phrase: 'Sometimes dead is better'},
            {phrase: 'We all float down here'}
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
        // select start screen and hide it
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';

        // call getRandomPhrase function
        const newRandomPhrase = this.getRandomPhrase();

        // define active phrase property of game class
        this.activePhrase = newRandomPhrase;

        // define variable & create new phrase class with random phrase
        this.phraseObject = new Phrase(newRandomPhrase);

        // add phrase to display
        this.phraseObject.addPhraseToDisplay();
    }

    // handles events on user activity
    handleInteraction(letter)
    {
        // send clicked letter to checkLetter() to see if it matches phrase
        let results = this.phraseObject.checkLetter(letter);

        // if returned 'matched' variable is empty (no match)
        // call remove life function
        if (results === null) {
            this.removeLife();
        }
    }

    removeLife()
    {
        // increment missed counter by 1
        this.missed++;
        console.log(this.missed);
        // replace a heart image with an empty heart image
        hearts[this.missed - 1].src = '../images/lostHeart.png';

        // if player misses 5 times, call end game function
        if (this.missed === 5) {
            // end game
        }
    }
}
