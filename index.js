// 1)Generate a random number between 1 and 100.
// 2)Record the turn number the player is on. Start it on 1.
// 3)Provide the player with a way to guess what the number is.
// 4)Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
// 5)Next, check whether it is the correct number.
// 6)If it is correct:
//      a)Display congratulations message.
//      b)Stop the player from being able to enter more guesses (this would mess the game up).
//      c)Display control allowing the player to restart the game.
// 7)If it is wrong and the player has turns left:
//      a)Tell the player they are wrong and whether their guess was too high or too low.
//      b)Allow them to enter another guess.
//      c)Increment the turn number by 1.
// 8)If it is wrong and the player has no turns left:
//      a)Tell the player it is game over.
//      b)Stop the player from being able to enter more guesses (this would mess the game up).
//      c)Display control allowing the player to restart the game.
// 9)Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

// ==============================================================================================================================

let randomNumber = Math.floor(Math.random()*100) + 1;
const gameWindow = document.querySelector('.game');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
const btn = document.createElement('button');
btn.textContent = "Restart Game";

function checkGuess(){
    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += (userGuess + ' ');
    
    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = "rgb(38, 202, 38)";
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent = 'GAME OVER!!!';
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent='';
        setGameOver();
    }
    else{
        if(userGuess > randomNumber){
            lowOrHi.textContent = 'It was too High';
        }else{
            lowOrHi.textContent = 'It was too Low';
        }
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = "red";
    }

    guessField.value = '';
    guessCount++;
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    gameWindow.append(btn);
    btn.addEventListener('click',resetGame);
    randomNumber = Math.floor(Math.random()*100) + 1;
}

function resetGame(){
    guessCount = 1;
    guesses.textContent = '';
    lowOrHi.textContent = '';
    lastResult.textContent = '';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    btn.remove();
}

console.log(randomNumber);
guessSubmit.addEventListener('click',checkGuess);