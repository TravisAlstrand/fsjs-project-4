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
}
