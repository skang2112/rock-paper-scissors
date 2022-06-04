function computerPlay() { //randomly returns Rock, Paper, or Scissors.
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function capitalise(word) { //capitalises only the first letter of a word
    firstLetter = word[0].toUpperCase();
    rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
}

function playRound(playerSelection, computerSelection) { //plays a single round of RPS, and returns a string declaring the winner
    let casePlayerSelection = capitalise(playerSelection); //makes playerSelection case insensitive

    if (casePlayerSelection === computerSelection) {
        return "It's a Tie! You both chose " + computerSelection;
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
        return "You Win! " + casePlayerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + casePlayerSelection;
    }
}
