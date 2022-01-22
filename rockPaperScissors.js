let uInput = Math.floor(Math.random() * 10);
  switch(uInput){
    case 0:
    uInput = 'rock';
    break;
    case 1:
    uInput = 'paper';
    break;
    case 2:
    uInput = 'scissors';
    break;
    default:
    uInput = 'bomb';
  }

const getUserChoice = userInput => {  
if (userInput.toLowerCase() === 'rock' ||userInput.toLowerCase() ==='paper' || userInput.toLowerCase() ==='scissors'|| userInput.toLowerCase() ==='bomb'){
  return userInput;
  }
else{
    console.log('Error Message !');
  }
}

function getComputerChoice(){
const cpuNum = Math.floor(Math.random() * 3);
  switch(cpuNum){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

const determinWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Tie game';}
       if (userChoice === 'bomb'){
      return "CPU 1 won";}

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "CPU 2 won";
     } else{
        return "CPU 1 won";
      }
    
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return "CPU 1 won";
     } else{
        return "CPU 2 won";
      }
    
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return "CPU 1 won";
    }  else{
        return "CPU 2 won";
      }
    
  }
  }

  const playGame = () => {
    let userChoice = getUserChoice(uInput);
     console.log('CPU 1:');
    console.log(userChoice);
console.log('--------------------');
    let computerChoice = getComputerChoice();
     console.log('CPU 2:');
    console.log(computerChoice);
console.log('--------------------');
     console.log('Results:');
    console.log(determinWinner(userChoice,computerChoice));
    
  }

playGame();






