// document.getElementById("count-el").innerText = 15
//  let count = 0
//  console.log(count)
// -----------------------------------------------------------------

//   let myAge =22
//  console.log(myAge)

// ---------------------------------------------------------------------

// let FirstBatch= 10
// let SecondBatch= 15
// let count = 0
//  count= FirstBatch + SecondBatch
  
//  console.log(count)

// ---------------------------------------------------------------------

// 1 Create var myAge and humanDogRatio
// 2 Multiply both and store the result in myDogAge

// let myAge = 20
// let humanDogRatio = 7
// let myDogAge = 0
// myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

// -----------------------------------------------------------

// let count=5
//  count*=1
//  console.log(count)

// ---------------------------------------------------------------------

// create variable bonusPoints.
// initilize: 50 , increase :100, decrease: 25, increase:70
// let bonusPoints = 50
// bonusPoints+=100
// console.log(bonusPoints)
// bonusPoints-=25
// console.log(bonusPoints)
// bonusPoints+=70
// console.log(bonusPoints)

// -----------------------------------------------------------------

// init count as 0
// listen for click on increment
// increment the count variable when the button is clicked
// change the count-el in html to reflect the new count

// let count = 0
// function increment(){
//     count+= 1
//     console.log(("The button of code is clicked"),count ,("time"))
// }

// -----------------------------------------------------------------


// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()

// ---------------------------------------------------

// function myFunct(){
//     console.log(45)
// }
// myFunct() 

// --------------------------------------------------------

// let lap1= 34
// let lap2= 36
// let lap3= 29
// function lapCount(){
//     console.log(lap1+lap2+lap3)
// }
// lapCount()

// -----------------------------------------------------

// let lapsCompleted = 0
// function lapsincrement(){
//     lapsCompleted+=1
//     console.log(lapsCompleted)
// }
// lapsincrement()
// lapsincrement()
// lapsincrement()
// console.log(lapsCompleted)

// -------------------------------------------------- 

// let username="Honey"
// let message = "You have three new notifications"
// console.log(message)
// console.log(username + ", " + message + "!")

// -------------------------------------------------

// let uName = document.getElementById("name-txt")
// let submitBtn = uName

// // console.log(submitVal) 

// function myGreeting(){ 
    
//     console.log(submitBtn)
// }

// ---------------------------------------------------------


// let welcomeEl= document.getElementById("welcome-el")

// let uName= "Honey"
// let greeting = "Welcome Home"

// welcomeEl.innerText = greeting + " "+uName+"!"
// console.log(welcomeEl.innerText)
// //add emoji :)

// welcomeEl.innerText += ":)"
// console.log(welcomeEl.innerText)

// -------------------------------------------------------
// passenger app:

let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
// console.log(saveEl)
let count=0
function increment(){
    count+=1
    countEl.innerText=count
    console.log(count)
 }
// let saveBtn =document.getElementById("save-btn")
// console.log(saveBtn)

function save(){
    let countStr= count+" - "
    saveEl.textContent+=countStr //render the variable in saveEl using innertetxt
    countEl.textContent=0
    count=0
    console.log(count)
}
save()


// --------------------------------

// variable practice

let firstName = "Anisha"
let lastName = "Alexander"

let fullName= firstName+" "+lastName

console.log(fullName)

// --------------------------------

// concatination practice

let char1= "Masha"
let char2="Bear"

let title = 0
function fullTitle(){
   title = char1+" and the "+char2 +" !"
   console.log(title)
 }
 fullTitle()

// -------------------------------------


 //increment and decrement
 let myPoints=3

 function add3points(){
    myPoints+=3
    console.log(myPoints)
 }
 function remove1point(){
    myPoints-=1
    console.log(myPoints)
 }
 add3points()
 add3points()
 add3points()
remove1point()
remove1point()
console.log(myPoints)
console.log(myPoints)

// ---------------------------------------

//strings and number practice




