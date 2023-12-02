// submitted by Greenfield Obasi for web dev open internship
// Iteration 1: Names and Input


let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

// All possible scenarios where one player will win
firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
secondPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
thirdPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;

fourthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;
fifthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
sixthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;

// Scenario where both choices are the same, resulting in a tie
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

// Conditional statement
if (firstPossibility || secondPossibility || thirdPossibility) {
    console.log("First player won!");
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
    console.log("Second player won!");
} else if (seventhPossibility) {
    console.log("It's a tie!");
} else {
    console.log("Something went wrong!");
}

