const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const roundResult = document.createElement('p');
const gameResult = document.createElement('p');
const currentScore = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.value);
    })
});

function computerPlay() { //randomly returns Rock, Paper, or Scissors.
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) { //prints a string declaring the  winner of a single round
    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a Tie! You both chose " + computerSelection;
        results.appendChild(roundResult);
        return "Tie";
    }
    else if (playerSelection == "Rock") {
        playerWin = (computerSelection == "Scissors");
    }
    else if (playerSelection == "Scissors") {
        playerWin = (computerSelection == "Paper");
    }
    else if (playerSelection == "Paper") {
        playerWin = (computerSelection == "Rock");
    }

    if (playerWin) {
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        results.appendChild(roundResult);
        return "Win";
    }
    else {
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        results.appendChild(roundResult);
        return "Lose";
    }
}

function giveReport(playerScore, computerScore) { //Declares the winner between two scores
    if (playerScore > computerScore) {
        return "You Win! The score was " + playerScore + " to " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "The Computer Wins! The score was " + playerScore + " to " + computerScore;
    }
    else return "It's a Tie!";
}

function game(playerSelection) { //keeps tally of and displays running score, and announces winner as the first person to get to 5 points
    if (playerScore == 5 || computerScore == 5) { //ensures game does not continue past 5 points won by one player
        return;
    }

    let roundResult = playRound(playerSelection, computerPlay());

    if (roundResult === "Win") {
        playerScore += 1;
    }
    else if (roundResult === "Lose") {
        computerScore += 1;
    }
    currentScore.textContent = "The score is " + playerScore + " to " + computerScore + ".";
    results.appendChild(currentScore);

    if (playerScore >= 5 || computerScore >= 5) {
        gameResult.textContent = giveReport(playerScore, computerScore);
        results.appendChild(gameResult);
    }
}