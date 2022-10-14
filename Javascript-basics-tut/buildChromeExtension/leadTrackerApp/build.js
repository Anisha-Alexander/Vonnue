let myLeads=[]
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.goo.com")
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)
const inputEl =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
const dltbtn= document.getElementById("dlt-btn")
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
dltbtn.addEventListener("dblclick",function(){
    console.log("doubleclicked")
    localStorage.clear()
    myLeads=[]
    renderLeads()
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" " 
    localStorage.setItem("myitems",JSON.stringify(myLeads))   

    renderLeads()
    console.log (localStorage.getItem("myLeads"))
    
})
function renderLeads(){
    let listItems = " "
    for (let i =0; i<myLeads.length;i++){        
        // listItems += "<li> <a  target='_blank'href='"+myLeads[i]+"'>" + myLeads[i]+ "<a></li>" 
        listItems += `
        <li> 
            <a target='_blank' href=${myLeads[i]}> 
                ${myLeads[i]}                 
            <a>
        </li>
        `
        //const li= document.createElement("li")// create element
        //li.textContent= myLeads[i] //set text content
        //ulEl.append[i]//append to ul
    }
    ulEl.innerHTML=listItems       
}

