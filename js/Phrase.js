/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

    // create variable for ul to append phrase
    const phraseUL = document.getElementById('phrase').firstElementChild;

// create the Phrase class
class Phrase {

    // constructor method creates the object. recieves a phrase parameter
    constructor(phraseObject) {

        // sets the phrase property = to the phrase parameter converted to lower case
        this.phrase = phraseObject.phrase.toLowerCase();

        this.letterLIs = [];
    }

    // function to display phrase on game screen
    addPhraseToDisplay() {

        // create array of phrase's characters
        const charArray = this.phrase.split('');

        // iterate through each character in array
        charArray.forEach(char => {

            // create an li element
            const li = document.createElement('li');

            // set the li's text to the character
            li.textContent = char;
    
            // if it's a space, add 'space' class, if letter, add 'letter' class
            if (char === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', [char]);
            }
    
            // append li element to ul
            phraseUL.appendChild(li);
            this.letterLIs.push(li);
        });
    }

    // to check if clicked letter is in current phrase
    checkLetter(letter)
    {
        let matchFound = [];

        // iterate through each phrase LI element
        this.letterLIs.forEach(li => {

            // if it's a match, assign matchFound var the LI
            if (li.classList.contains(letter)) {
                matchFound.push(li);
            }
        });

        return matchFound;
    }

    // show correct guess on screen
    showMatchedLetter(li) {
        li.forEach(li => {
            li.classList.remove('hide');
            li.classList.add('show');
        });
    }
}