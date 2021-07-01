let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The drawn number is: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'stone';
}

else if(randomNumber == 2){
  computerMove = 'paper';
}

else if(randomNumber == 3){
  computerMove = 'scissors';
}

printMessage('I choose: ' + computerMove);

let playerInput = prompt('Your turn! 1: stone, 2: paper, 3: scissors.');

console.log('Player choose: ' + playerInput);

let playerMove = 'unknown choose';

if(playerInput == '1'){
  playerMove = 'stone';
}

else if(playerInput == '2'){
  playerMove = 'paper';
}

else if(playerInput == '3'){
  playerMove = 'scissors';
}

printMessage('Your choose: ' + playerMove);

if( computerMove == 'stone' && playerMove == 'paper'){
  printMessage('You win!');
}

else if( computerMove == 'stone' && playerMove == 'stone'){
  printMessage("It's a draw!");
}

else if( computerMove == 'stone' && playerMove == 'scissors'){
  printMessage("You lose!");
}

else if( computerMove == 'paper' && playerMove == 'stone'){
  printMessage("You lose!");
}

else if( computerMove == 'paper' && playerMove == 'paper'){
  printMessage("It's a draw!");
}

else if( computerMove == 'paper' && playerMove == 'scissors'){
  printMessage("You win!");
}

else if( computerMove == 'scissors' && playerMove == 'stone'){
  printMessage("You win!");
}

else if( computerMove == 'scissors' && playerMove == 'scissors'){
  printMessage("It's a draw!");
}

else if( computerMove == 'scissors' && playerMove == 'paper'){
  printMessage("You lose!");
}

else if( computerMove == 'stone' && playerMove == 'unknown choose'){
  printMessage("You have to pick number from 1 to 3!");
}

else if( computerMove == 'paper' && playerMove == 'unknown choose'){
  printMessage("You have to pick number from 1 to 3!");
}

else if( computerMove == 'scissors' && playerMove == 'unknown choose'){
  printMessage("You have to pick number from 1 to 3!");
}