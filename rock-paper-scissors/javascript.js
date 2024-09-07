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
humanScore = 0;
computerScore = 0;

function playRound (humanChoice, computerChoice){
    
    const resultdiv = document.getElementById("result");
    const human = document.getElementById("human")
    const computer = document.getElementById("computer")
    const humanChoice1 = humanChoice.toUpperCase();
    console.log("humanChoice1 " ,humanChoice1);
    const computerChoice1 = computerChoice.toUpperCase();
    console.log("computerChoice1 " ,computerChoice1);
    if(humanChoice1 == computerChoice1){
        resultdiv.textContent = "Draw! You picked: " + humanChoice1 + ` and the computer picked ${computerChoice1}`;
    }
    else if (
        (humanChoice1 === "ROCK" && computerChoice1 === "PAPER") || 
        (humanChoice1 === "PAPER" && computerChoice1 === "SCISSORS" ) ||
        (humanChoice1 === "SCISSORS" && computerChoice1 === "ROCK" ) 
        ){
            resultdiv.textContent = "You lose! " + computerChoice1 + " beats " + humanChoice1;
        computerScore++;
    }
    else {
        resultdiv.textContent = "You won! " + humanChoice1 + " beats " + computerChoice1 ;
        humanScore++;
    }
    human.textContent = "Human Score: " + humanScore;
    computer.textContent = "Computer Score: " + computerScore;
    console.log("humanScore ", humanScore);
    console.log("computerScore ", computerScore);
    checkWinner();
    
}


function checkWinner() {
    const resultdiv = document.getElementById("result");
    
    if (humanScore === 5) {
        resultdiv.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultdiv.textContent = "Sorry, the computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function playGame(){
    
    humanScore = 0;
    computerScore = 0;
    
   /*  for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
    } */
    if(humanScore > computerScore){
        console.log("You win the computer!! Congratulations!!");
    }
    else {
        console.log("You lose!! Try again !!")
    }
    console.log(`You have ${humanScore} points and the computer has ${computerScore}`)
}

document.getElementById("rock").addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("ROCK", computerChoice);
})

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("SCISSORS" , computerChoice);
})

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("PAPER", computerChoice);
})

//playGame();

console.log("humanScore ", humanScore);
console.log("computerScore ", computerScore);
