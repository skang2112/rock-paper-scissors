function computerPlay() { //randomly returns Rock, Paper, or Scissors.
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function capitalise(word) { //capitalises only the first letter of a word
    firstLetter = word[0].toUpperCase();
    rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
}

function playRound(playerSelection, computerSelection) { //plays a single round of RPS, and console.log(s a string declaring the winner
    let casePlayerSelection = capitalise(playerSelection); //makes playerSelection case insensitive

    if (casePlayerSelection === computerSelection) {
        console.log("It's a Tie! You both chose " + computerSelection);
        return "Tie";
    }
    else if (casePlayerSelection == "Rock") {
        playerWin = (computerSelection == "Scissors");
    }
    else if (casePlayerSelection == "Scissors") {
        playerWin = (computerSelection == "Paper");
    }
    else if (casePlayerSelection == "Paper") {
        playerWin = (computerSelection == "Rock");
    }

    if (playerWin) {
        console.log("You Win! " + casePlayerSelection + " beats " + computerSelection);
        return "Win";
    }
    else {
        console.log("You Lose! " + computerSelection + " beats " + casePlayerSelection);
        return "Lose";
    }
}

function report(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You Win! The score was " + playerScore + " to " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "The Computer Wins! The score was " + playerScore + " to " + computerScore;
    }
    else return "It's a Tie!";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult === "Win") {
            playerScore += 1;
        }
        else if (roundResult === "Lose") {
            computerScore += 1;
        }
    }

    console.log(report(playerScore, computerScore));
}

game();