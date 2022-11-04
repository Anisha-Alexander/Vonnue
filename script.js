import data from "./data.json" assert{type:'json'}

const websiteContEl = document.querySelector('.website-container')
console.log(websiteContEl)

const webarr= data.website
const webfunct=webarr.forEach((item) =>{
    websiteContEl.innerHTML +=`<div class="anchor-element-card">
        <a href="${item.url}">${item.name}</a>                
    </div>`
})


