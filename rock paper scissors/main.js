let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { 
    win: 0,
    loss: 0,
    tie: 0
}


document.querySelector('.js-score').innerHTML = `<p>Win:${score.win} Loss:${score.loss} Tie:${score.tie}</p>`;
const pickComputerMove = () => {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        computerMove = 'Rock';
    } else if(randomNumber > 0.33 && randomNumber <=0.67) {
        computerMove = 'Paper';
    } else{
        computerMove = 'Scissors';
    }
    console.log(computerMove);
}
function pickPlayerMove(playerMove)  {
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'Its a Tie';
            
        } else if (computerMove === 'Paper') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Lose'
        } else if (computerMove === 'Scissors') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Win';
        
        }
    } else  if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Win';
            
        } else if (computerMove === 'Paper') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'Its a Tie';
            
        } else if (computerMove === 'Scissors') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Lose';
        }
    } else  if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'You Win';
          
        } else if (computerMove === 'Scissors') {
            document.querySelector('.js-results').innerHTML = `<p> You picked <img src="images/${playerMove}.png" class="resultimage"> Computer picked <img src="images/${computerMove}.png" class="resultimage">  </p>`;
            result = 'Its a Tie';
            
        }
       
    }
    document.querySelector('.result').innerHTML = result;
    if (result === 'You Win') {
        score.win +=1;
    } else  if (result === 'You Lose') {
        score.loss +=1;
    } else {
        score.tie +=1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    console.log(JSON.stringify(result));
    document.querySelector('.js-score').innerHTML = `<p>Win:${score.win} Loss:${score.loss} Tie:${score.tie}</p>`;
    document.querySelector('.js')
}
const resetscore = () => {
    score.win = 0;
    score.tie = 0;
    score.loss = 0;
    document.querySelector('.js-score').innerHTML = `<p>Win:${score.win} Loss:${score.loss} Tie:${score.tie}</p>`;
    localStorage.removeItem('score');
    document.querySelector('.js-results').innerHTML = 'Score Reset';
    document.querySelector('.result').innerHTML='';
    document.querySelector('.js-result').innerHTML='';
    
    
}
document.querySelector('.js-mainButton').addEventListener('click', pickComputerMove);
document.querySelector('.js-mainButton2').addEventListener('click', pickComputerMove);
document.querySelector('.js-mainButton3').addEventListener('click', pickComputerMove);
document.querySelector('.js-reset').addEventListener('click', resetscore);
document.querySelector('.js-mainButton').addEventListener('click', () => {
    pickPlayerMove('Rock')
});
document.querySelector('.js-mainButton2').addEventListener('click', () => {
    pickPlayerMove('Paper')
});
document.querySelector('.js-mainButton3').addEventListener('click', () => {
    pickPlayerMove('Scissors')
});
