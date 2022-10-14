let player1Time =102
let player2Time =107

function getfastestRaceTime(){
    if (player1Time< player2Time){
        return player1Time
    }
    else if( player2Time< player1Time){
        return player2Time
    }
    else{
        return player1Time
    }
}
function totalRaceTime(){
    return player1Time+player2Time    
}
// let fastestRaceTime = getfastestRaceTime()
// console.log("The fastest Player "+fastestRaceTime)
let totalTime = totalRaceTime()
console.log("Total Race time : "+totalTime)
