let player = { //creating an object
    name: "Honey",
    chips : 145
}
let cards=[]// ordered list of items -array
let sum= 0
let hasBlackJack =false //to track the the win
let isAlive= false  //to check if you still have chance to stay
console.log(sum)
let message= ""
let messageEl= document.getElementById("message-el")//to display message in window
let sumEl= document.getElementById("sum-el")//to display the sum in window
let cardsEl=document.getElementById("cards-el")//to display the cards in window
let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $ " + player.chips

function getRandomCard(){
    // let randomNum= Math.random()*12 +1
    // let flooredNumber=Math.floor(randomNum)
    // return flooredNumber
    // or    
    let randomNum= Math.floor(Math.random()*13 +1) // we add 1 to modify the range from 0-12 to 1-13
    if (randomNum > 10){
        return 10 
    }
    else if ( randomNum === 1){
        return 11
    }    
    else {
        return randomNum
    }
}
function startGame(){
    isAlive=true
    let firstRandom=getRandomCard()
    let secondRandom=getRandomCard()
    cards+= [firstRandom , secondRandom]    
    sum = firstRandom +secondRandom   
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
        isAlive=false
    }
    for(let i=0;i< cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
     }
    cards=[]
    messageEl.textContent=message    
}
function newCard(){    
    if (hasBlackJack=== false && isAlive== true ){
        let drawnCard = getRandomCard()  
        sum += drawnCard   
        cards.push( " , "+drawnCard) 
        console.log(cards)    
        renderGame()   
    }
    else if (hasBlackJack===true) {
        console.log(" You already have a BalckJack")
    } 
    else {
        console.log("you're out of the game")
    }
}

// ---------------------------------
// let cards= [7,4]
// console.log(cards)
// cards.push(8,7)
// console.log(cards)