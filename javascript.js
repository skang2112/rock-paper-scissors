function computerPlay() { //randomly returns Rock, Paper, or Scissors.
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function capitalise(word) { //capitalises only the first letter of a word, converts the rest to lower case
    firstLetter = word[0].toUpperCase();
    rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
}

function playRound(playerSelection, computerSelection) { //prints a string declaring the  winner of a single round
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

function giveReport(playerScore, computerScore) { //Declares the winner between two scores
    if (playerScore > computerScore) {
        return "You Win! The score was " + playerScore + " to " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "The Computer Wins! The score was " + playerScore + " to " + computerScore;
    }
    else return "It's a Tie!";
}

function game() { //takes user prompt for RPS choice, displays round result and announces final score after 5 rounds
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

    console.log(giveReport(playerScore, computerScore));
}

game();