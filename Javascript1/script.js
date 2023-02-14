'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let hightScore = 0;
const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
   const guess =  Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
   if(!guess)
   {
    displayMessage('No Number'); 
   }
   else if(guess===secretNumber){
    displayMessage('Corretct Number');   
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score>hightScore){
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
    }
   }
   else if(guess !==secretNumber)
   {
    if(score>1)
    {
       displayMessage(guess> secretNumber ? 'Too Hight' : 'Too Low!');
    score--; 
     document.querySelector('.score').textContent = score;
    }
    else{
       displayMessage('Lose Game');
        document.querySelector('.score').textContent = 0;
    }
   }
  
})
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...'); 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});