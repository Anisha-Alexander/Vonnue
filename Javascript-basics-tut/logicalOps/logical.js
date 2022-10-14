// AND OPERATOR " && "
// ------------------------

// let hasCompletedCourse = false
// let givesCertificate =true
// function generateCerticate(){
//     if (hasCompletedCourse && givesCertificate === true){
//         console.log("generating certificate......")
//     }
//     else{
//         console.log("you are not eligible !")
//     }
// }
// generateCerticate()

// --------------------------------------------------------------------

// task: 

// let hasSolvedChallenge=true
// let hasHintLeft= true
 
// if (hasSolvedChallenge === false && hasHintLeft === false){
//      showSolution()
// }
// else{
//     console.log("you have already solved!")
// }
// function showSolution(){
//     console.log("Showing the Solution......")
// }
// -----------------------------------------------------------------------

// OR OPERATOR 

let likesDocumenatires = false
let likesStartups =true
if (likesDocumenatires === true || likesStartups === true){
    recommendMovie()
}

function recommendMovie(){
    console.log ("Hey , check out this new film , we think you'll like !")
}