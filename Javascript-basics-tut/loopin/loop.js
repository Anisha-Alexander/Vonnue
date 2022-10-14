// for ( let i=10; i <=100; i +=10){
//     console.log(i)
// }


// -----------------------------------

// let messages=[
//     "Hey, how's it going?",
//     "I'm great, thank you ! How about you",
//     "Doing good ! Being working on my portfolio lately.",
//     "Same Here",
//     "Great to here"
// ]
//  for (let i=0; i <= messages.length; i+=1){
//     console.log(messages[i])
//  }
// ---------------------------------------------

// let cards=[7,3,9]
// for (i=0; i<= cards.length; i++){
//     console.log(cards[i])
// }
// ------------------------------------------------

// " Rendering to a paragraph using for loop and .textContent"
let sentence=["Hello","my","name","is","Masha"]
let greetingEl=document.getElementById("greeting-el")
console.log(greetingEl)


for(let i=0; i<sentence.length; i++){
    greetingEl.textContent+=sentence[i] + " "
}
