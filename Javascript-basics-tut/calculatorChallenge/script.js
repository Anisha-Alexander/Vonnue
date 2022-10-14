let fnum = 20
let snum = 15

document.getElementById("fnum-el").textContent= fnum
document.getElementById("snum-el").textContent = snum

let addnum=0
let subnum=0
let divnum=0
let mulnum=0

let sumEl= document.getElementById("sum-el")
console.log(addnum)
function add(){
    addnum= fnum+snum
    console.log(addnum)
    sumEl.textContent=addnum
}

function substract(){
    subnum =fnum-snum
    console.log(subnum)
    sumEl.textContent=subnum
}
 function divide(){
    divnum=fnum/snum
    console.log(divnum)
    sumEl.textContent=divnum
 }
 function multiply(){
    mulnum=fnum*snum
    console.log(mulnum)
    sumEl.textContent=(mulnum)
 }
 add()
 substract()
 divide()
 multiply()