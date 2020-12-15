let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function to generate a random number between 0 - 9.
const generateTarget = function() {
    const randomNum = Math.floor(Math.random() * 10);
};

// Function to compare guesses and determine winner.
const compareGuesses = function(humanGuess, computerGuess, targetNum) {

    // function to find the difference between guessed number and target number.
    const difference = function(num1, num2) {
        return Math.abs(num1 - num2);
    };

    // call the functions once for human and once for computer, save the values to variables.
    const humanDiff = difference(humanGuess, targetNum);
    const computerDiff = difference(computerGuess, targetNum);

    // Use a conditional statement to determine who is the winner (boolean value).
    if (humanDiff < computerDiff || humanDiff == computerDiff) {
        return true;
    } else {
        return false
    };
    
};

// Function used to determine winner response and update score.
const updateScore = function(string) {

    //Use conditional to interpret winner and update score.
    if (string == 'human') {
        humanScore += 1;
    } else if (string == 'computer') {
        computerScore += 1;
    };
};
