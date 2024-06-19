let humanScore;
let computerScore;

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const humanChoice = prompt ("¿Choose one: rock, paper or scissors?");
    return humanChoice;
}

// console.log(getHumanChoice());

function playRound (humanChoice, computerChoice){
    const humanChoice1 = humanChoice.toUpperCase();
    const computerChoice1 = computerChoice.toUpperCase();
    if(humanChoice1 === computerChoice1){
        alert ("Draw! You picked: " + humanChoice1 + `and the computer picked ${computerChoice1}`)
    }
    else if (
        (humanChoice1 === "rock" && computerChoice1 ==="paper") || 
        (humanChoice1 === "paper" && computerChoice1 === "scissors" ) ||
        (humanChoice1 === "scissors" && computerChoice1 === "rock" ) 
        ){
        alert ("You lose! " + humanChoice1 + " beats " + computerChoice1);
        computerScore++;
    }
    else {
        alert ("You won! " + humanChoice1 + " beats " + computerChoice1 );
        humanScore++;
    }

}


function playGame(){
    
    humanScore = 0;
    computerScore = 0;
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
    }
    if(humanScore > computerScore){
        alert("You win the computer!! Congratulations!!");
    }
    else {
        alert("You lose!! Try again !!")
    }
    console.log(`You have ${humanScore} points and the computer has ${computerScore}`)
}

playGame();

// console.log(humanScore);
// console.log(computerScore);
