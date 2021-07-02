function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'stone';
  } else if(argMoveId == 2){
    return 'paper';
  } else if(argMoveId == 3){
    return 'scissors';
  }
  printMessage('Unknown move with id ' + argMoveId + '.');
  return 'unknown choose';
}

function displayResult(argComputerMove, argPlayerMove){
  if(argComputerMove == 'stone' && argPlayerMove == 'paper'){
    printMessage('You win!');
  } else if(argComputerMove == 'stone' && argPlayerMove == 'stone'){
    printMessage("It's a draw!");
  } else if(argComputerMove == 'stone' && argPlayerMove == 'scissors'){
    printMessage('You lose!');
  } else if(argComputerMove == 'paper' && argPlayerMove == 'stone'){
    printMessage('You lose!');
  } else if(argComputerMove == 'paper' && argPlayerMove == 'paper'){
    printMessage("It's a draw!");
  } else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
    printMessage('You win!');
  } else if(argComputerMove == 'scissors' && argPlayerMove == 'stone'){
    printMessage('You win!');
  } else if(argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
    printMessage("It's a draw!");
  } else if(argComputerMove == 'scissors' && argPlayerMove == 'paper'){
    printMessage('You lose!');
  } else if(argComputerMove == 'stone' && argPlayerMove == 'unknown choose'){
    printMessage('You have to pick number from 1 to 3!');
  } else if(argComputerMove == 'paper' && argPlayerMove == 'unknown choose'){
    printMessage('You have to pick number from 1 to 3!');
  } else if(argComputerMove == 'scissors' && argPlayerMove == 'unknown choose'){
    printMessage('You have to pick number from 1 to 3!');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The drawn number is: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('I choose: ' + argComputerMove);

let playerInput = prompt('Your turn! 1: stone, 2: paper, 3: scissors.');

console.log('Player choose: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage('Your choose: ' + argPlayerMove);

let result = displayResult(argComputerMove, argPlayerMove);