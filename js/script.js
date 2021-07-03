function playGame(playerInput){

  clearMessages();

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

  playerMove = getMoveName(playerInput);

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('The drawn number is: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  printMessage('I choose: ' + argComputerMove);

  console.log('Player choose: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  printMessage('Your choose: ' + argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);

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
}

document.getElementById('play-stone').addEventListener('click', function(){
  playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});



