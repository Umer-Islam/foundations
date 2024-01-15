console.log("hello World");
let getComputerChoice = () => {
  let choose = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * 3);
  return choose[choice];
};
let computerSelection = getComputerChoice();
let playerSelection = prompt('ROCK,Paper,or Scissors..... DECIDE')
playerSelection = playerSelection.toLowerCase();

console.log({ computerSelection });
console.log({ playerSelection });


function round (playerSelection, computerSelection) {
   
    if (computerSelection !== playerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      return playerSelection === "rock" ? "you won" : "Computer wins";
    } else if (
      (playerSelection === "scissors " && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      return playerSelection === "scissors" ? "you won" : "Computer wins";
    } else if (
      (playerSelection === "paper " && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      return playerSelection === "paper" ? "you won" : "Computer wins";
    }
  }else{
    console.log('draw')
    return `Draw`
  }
};
console.log("result of the round: ", round(playerSelection,computerSelection));
// round
