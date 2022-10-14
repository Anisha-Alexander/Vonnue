let firstCard=9
let secondCard=1
let sum= firstCard+secondCard
let hasBlackJack =false //to track the the win
let isAlive= true //to check if you still have chance to stay
console.log(sum)
let message= ""
let messageEl= document.getElementById("message-el")//to display message in window
let sumEl= document.getElementById("sum-el")//to display the sum in window
let cardsEl=document.getElementById("cards-el")//to display the cards in window


function startGame(){
    renderGame()
}

function renderGame(){
    
    sumEl.textContent = sum   
    
    if (sum < 21){
        message="Do you want to draw a new card"
        hasBlackJack=false
    }
    else if (sum === 21){ 
        message="Woohoo! You've got a black jack!"
        hasBlackJack=true
    }
    else if(sum > 21){
        message="You're out of the game" 
        hasBlackJack=false       
        isAlive=false
    }
    cardsEl.textContent= firstCard + " , " + secondCard     
    sum=firstCard + secondCard  
    messageEl.textContent=message
    console.log("hasblackjack"+" : "+hasBlackJack)
}
function newCard(){
    console.log("Drawing a new card from the deck ....") 
    let drawnCard = 11  
    
    sum =firstCard + secondCard + drawnCard    
    renderGame()    
    cardsEl.textContent= firstCard + " , " + secondCard + " , " + drawnCard        
}