let hand =["rock", "paper", "scissors"]

function rockgame(){
    randomindex= Math.floor((Math.random()*3))
    return hand[randomindex]
}
console.log(rockgame())

