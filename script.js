import data from "./data.json" assert{type:'json'}
const randomImg = 'https://source.unsplash.com/random/'
const src = 'assets/double-click.png'

const websiteContEl = document.querySelector('.website-container')
console.log(websiteContEl)

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}
const webarr= data.website
webarr.forEach((item) =>{
    websiteContEl.innerHTML +=`<div class="anchor-element-card">
        <a class='title' href="${item.url}">${item.name}</a> 
        <div class="image-container">
            <img src = "${randomImg} ${getRandomSize()}">
        </div>   
        <div class="demo-box">
            <a href="${item.url}">
                Click Here !
            </a>           
        </div>
    </div>`

})




