
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

console.log(getComputerChoice());