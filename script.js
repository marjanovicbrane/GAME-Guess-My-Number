'use strict';


//RANDOM NUMBER BETWEEN 1-20
let secretNumber=Math.trunc(Math.random()*20)+1;

//just for debugging
//document.querySelector('.number').textContent=secretNumber;

//start value for score
let score=7;

//Adding event listener to the button check and saving into vairable value from the input field.
document.querySelector('.check').addEventListener('click', function (){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //Where there is no input
    //When we don't enter anything to input field...
    //guess=0 and o is falsy value, so guess is FALSE
    //in this if statement.
    //!FALSE=TRUE
   if(!guess){
    document.querySelector('.message').textContent='👎 No number!';

    //when player wins
   }else if(guess===secretNumber){
    document.querySelector('.message').textContent='😆 Correct number!';

    //we want to show that number, when player win
    document.querySelector('.number').textContent=secretNumber;

    //we are going to manipulate CSS styles here
    //if player wins background of the game need to be green
    document.querySelector('body').style.backgroundColor='#60b347';

    //we also want to increase width of number field if player wins
    document.querySelector('.number').style.width='30rem';

    //when guess is too high
   }else if(guess>secretNumber){
        //We want to add here some additional logic, for case
       //if we lost all our score (0), we need to get some message that game is over.
       //We can achive this with another if statement, where
       //score need to be greater then 0 and then need to do
       //all this block with a message that the number is too high.
       if(score >1){
        document.querySelector('.message').textContent='📈 Too high';
        //We want to implement here logic for score.
       //If we enter a wrong number our score need to be decremented for 1
        score--;
        document.querySelector('.score').textContent=score;
           }else{
            document.querySelector('.message').textContent='⚠️ GAME OVER!';
            document.querySelector('.score').textContent=0;
           }

    //when guess is too low
   }else if(guess<secretNumber){
    if(score >1){
        document.querySelector('.message').textContent='📉 Too low';
        //We want to implement here logic for score.
       //If we enter a wrong number our score need to be decremented for 1
        score--;
        document.querySelector('.score').textContent=score;
           }else{
            document.querySelector('.message').textContent='⚠️ GAME OVER!';
            document.querySelector('.score').textContent=0;
           }
        }
})




//Again button
document.querySelector('.again').addEventListener('click',function(){
   const score=7;
   document.querySelector('.score').textContent=score;

   //we don't want to create a new secret number, we want when the new game starts to create a new secret number and than re-assigning the variable
   secretNumber=Math.trunc(Math.random()*20)+1;

   document.querySelector('.number').textContent='?';
   secretNumber2;

   document.querySelector('.message').textContent='Start guessing...';

   document.querySelector('.guess').value='';

   document.querySelector('.number').style.width='15rem';

   document.querySelector('body').style.backgroundColor='#222';

})
