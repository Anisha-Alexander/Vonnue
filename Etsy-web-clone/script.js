import dataBase from "./data.json" assert{type:'json'}
// import data from "./check.json" assert{type:'json'}
const mainContainer = document.getElementById('main-container')
console.log(mainContainer)

//header for mobile
let navCont = document.querySelector('.nav-container')
navCont.innerHTML+=` <div class="nav-header-container-mob">
            <a href="#" id="nav-title" class="nav-title"><svg xmlns="${dataBase[1].header.title}" viewBox="0 0 48 24" aria-hidden="true" focusable="false"><path d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z"></path></svg></a>
            <div class="search-input-container-tab"></div>
            <ul class="nav-header-left-card">
                <li><button id="signin-btn">${dataBase[1].header.signTxt}</button></li>
                <li><a href="#" class="left-header-icon"><svg xmlns="${dataBase[1].header.likeIcon}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg></a></li>
                <li><a href="#" class="left-header-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 10a1 1 0 00-1-1h-3c.059-.682.287-4.44-1.611-6.555A4.363 4.363 0 0012 1a4.363 4.363 0 00-3.394 1.445C6.709 4.56 6.937 8.318 7 9H4a1 1 0 00-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7l.283-1.283.159-.717h2.651a25.487 25.487 0 01-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.27-.248-2h2.656l.159.717L8.307 17h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.13-.377-1.717h-.001zM9.479 13a39.761 39.761 0 01-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.43.354-2h2.075a61.73 61.73 0 01-.067 2zM10.1 3.78A2.412 2.412 0 0112 3a2.412 2.412 0 011.9.78c1.205 1.338 1.2 4.145 1.1 5.113a.928.928 0 00.01.106H8.984a.923.923 0 00.01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.57.2 1.252.354 2H5.073a61.441 61.441 0 01-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.514 0 016.239 19zm4.756 1.885A13.506 13.506 0 0010.756 19h2.489c-.123.62-.203 1.25-.239 1.881-.334.044-.67.068-1.006.071a8.66 8.66 0 01-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.44h2.489a6.655 6.655 0 01-2.724 1.44z"></path></svg></a></li>
            </ul>
        </div>
        <div class="nav-main-container-mob">
            <button id="hamburger-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M20 7H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm-4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h11.2c.6 0 1 .4 1 1s-.4 1-1 1zm4.8 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z"></path></svg>
            </button>
            <div class="search-input-container-mob">
                <input type="text" id="search-box" class="search-box" placeholder="Search for anything">
                <button type="button" id="search-icon" class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg></button>
            </div>
        </div>`

// main for mobile
mainContainer.innerHTML += `<h1 class="main-label-text">${dataBase[0].cardsLabelContainerMainHead[0].labelText}</h1>`
mainContainer.innerHTML+=`<div class="cards-container"></div>`
let cardsInnerEl= document.querySelector(".cards-container")
function displayCardsInnerHTML(){
    let cardLen=(dataBase[0].cardsLabelContainerMainHead[1].cards).length
    console.log(cardLen)
    let cardEl=0
    let cardTitle=0
    let cardImg=0
    
    for (let i = 0;i< cardLen;i++){
        cardEl=(dataBase[0].cardsLabelContainerMainHead[1].cards[i])
        cardTitle=(dataBase[0].cardsLabelContainerMainHead[1].cards[i].title)
        cardImg=(dataBase[0].cardsLabelContainerMainHead[1].cards[i].imageURL)
        // console.log(cardEl)
        console.log(cardTitle)
        console.log(cardImg)
        cardsInnerEl.innerHTML+=`
                                <div class="img-title-container">
                                    <div class="card-img"><img src="${cardImg}"></div>
                                    <p class="card-img-title">${cardTitle}</p>
                                </div>`


    }
}
displayCardsInnerHTML()

//section header for mobile
let sectionMain= document.querySelector('.section-main')
console.log(sectionMain)
sectionMain.innerHTML +=`
                    <div class= "section-main-label">
                        <a href="#" id="section-main-label-card">
                            <h2>${dataBase[2].section.label}</h2>
                            <i class="fa fa-arrow-right" aria-hidden-true></i>
                        </a>
                    </div>

                    `
sectionMain.innerHTML +=`<div class="section-main-img-cards-cont"></div>`            
console.log(sectionMain)        
let  sectionMainImgCardInnnerEl =document.querySelector(".section-main-img-cards-cont")         
console.log(sectionMainImgCardInnnerEl) 

function sectionMainImgCard(){
    let sectionMainCardsLen =(dataBase[[2]].section.pictureCard).length
    console.log(sectionMainCardsLen)
    let sectionMainCard= 0
    let sectionCardImg=0
    let sectionCardTitle=0
    
    for(let i = 0;i<sectionMainCardsLen;i ++){
        sectionMainCard =(dataBase[2].section.pictureCard[i])
        sectionCardImg=(dataBase[2].section.pictureCard[i].img)
        sectionCardTitle =(dataBase[2].section.pictureCard[i].title)
        console.log(sectionCardTitle)
        sectionMainImgCardInnnerEl.innerHTML +=`
                                            <a href="#" class="section-main-img-card">
                                                <div class="section-main-img-box">
                                                    <img src="${sectionCardImg}">
                                                </div>
                                                <div class ="section-main-text-box">
                                                    <p>${sectionCardTitle}</p>
                                                </div>
                                            </a>
        `
    }

}
sectionMainImgCard()
 
// input-button-container

let inputBTnCont= document.getElementById('input-button-container')
console.log(inputBTnCont)
inputBTnCont.innerHTML+= `<div class="inBtn-card">
                            <p class="inBtn-label">${dataBase[4].inputBtnCont.label}</p>
                            <div class="inBtn-box">
                                <input type="text" id="input-el" placeholder="${dataBase[4].inputBtnCont.placeholder}">
                                <button  type="submit" id="subscribe-btn">${dataBase[4].inputBtnCont.button}</button>
                            </div>
                        </div>`
// article for mobile

let articleEl = document.getElementById('article-el')
console.log(articleEl)
articleEl.innerHTML +=`<div class="article-label-card">
                    <h2>${dataBase[3].article.artlabel}</h2>
                    <i class="fa  fa-arrow-right" aria-hidden="true"></i>
                    </div>`
articleEl.innerHTML +=`<div id="article-img-cards-cont"></div>` 
let articleCardsInner = document.getElementById('article-img-cards-cont')
console.log(articleCardsInner)

function articleImgCards(){
            let articleImgCardsLen=(dataBase[3].article.imgTextBox).length
            console.log(articleImgCardsLen)
            let artCard =0
            let artCardImg=0
            let artCardTitle=0
            let artCardDesc=0
            let artCardPara=0

            for (let i =0; i< articleImgCardsLen;i++){
                artCard=(dataBase[3].article.imgTextBox[i])
                artCardImg=(dataBase[3].article.imgTextBox[i].imgURL)
                artCardTitle=(dataBase[3].article.imgTextBox[i].title)
                artCardDesc=(dataBase[3].article.imgTextBox[i].desc)
                artCardPara=(dataBase[3].article.imgTextBox[i].para)
                console.log(artCardPara)
                articleCardsInner.innerHTML+=`<div class="art-img-text-card">
                                                <div class="img-box">
                                                    <img src="${artCardImg}">
                                                </div>
                                                <div class="text-box">
                                                    <span class="card-title">${artCardTitle}</span>
                                                    <h3 class="card-desc">${artCardDesc}</h3>
                                                    <p class="card-para">${artCardPara}</p>
                                                </div>
                                            </div>`
            }
}
articleImgCards()

// footer for mobile

let footerEl = document.getElementById('footer-container')
console.log(footerEl)
footerEl.innerHTML +=`<span class="svg-border"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
                        <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
                        </svg>
                    </span>
                    <div id="story-container">
                        <div class ="story-head-box">
                            <h2>${dataBase[5].footer.labelHead}</h2>
                            <a href="#">${dataBase[5].footer.labelLink}</a>
                        </div>      
                        <div id="story-card"></div>    
                        <div class="story-foot-box">
                                <h4>${dataBase[5].footer.storyFootHead}</h4>
                                <button id="help-btn"><a href="#">${dataBase[5].footer.storyFootLink}</a></button>
                        </div>
                    </div>
                    <div id="footer-main-container">
                        <div class="footer-main-head-box">
                            <span class="blue-svg-border"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M839 47l7-1 4-1 2 1h4l3-1 3-1 2 1 1-1 8-1 2 1h4l5-1 2-1h5l2-1 1 1h6l2-1h9l2-1h4l3-1h27v1h10l1 1h3l3-1 1 1h11l6 2v-1h4l1-1h10l2 1h7l2 1h3l2 1h2l1-1h6v1h2l1-1 1 1h1l3 1h7l1 1h6l1-1h3l1 1 5-1h17l4-1h4l3 1h2l1 1h19l2-1h5v1l1-1h2l1 1h9l1-1 1 1 4-1h12l1-1h4l1-1h2l3-1h5v-1h11l1 1h6l2 1h3l1-1 2-1h1l2-1h5l2-1 2 1h2l2 1h5l1 1h2l2 1h1l1-2 1-1 2-1h10l2 1h6l1 1h2l1-2 2-1 1-1 2-1h12l1 1h19l1-1h6l1-1 3 1h7l2 2 1 1 7-1 1-1 2-1h4l2-1 1-1h6l1-1 2 1 3-1h9l1-1h2l2-1h2l1-1h1l4-1 3 1h1l1-1h2l1-1 2-1h2l2-1v-1h12l3-1h2l2-1h2l3 1 1-1 1-1h14V0H0v2h2v1-1h10l1 1 2-1h3l1 1h1V2h4l2 1v1l1-1h1l1 1V3l4 1h4l1 1h2l1-1h-1l1-1 1 1 2 1h1l2-1h7l2 1h9l2 1h3l1-1h4l2 1 2 1 2-1h8l1-1 1 1h4l2 1 3-1h10l1 1h3l3 1h1V7l2 1h4l1 1h1l1-1h5l3 1h2l1-1 1 1 1-1 2 1h5l1 1h1V8h1l2 1 1 1h4-1l1-1h1l2 1h2l1-1h1l3 1h20v1-1l1 1h2l2 1h2l2 1 2 1h6l1-1h4l1-1h2l5-1 3 1h9l1-1h2l1-1h4v1h3l4-2 3-1h2l1-1h6l8 1 3 1h3l2 1 1-1h1l2-1h9l4-1 6-2h6l2-1h7l5-1h1l1-1h15l1 1 2-1 2 1h2l1-1h1v1h1l6 1h2l1-1h4l2-1 4 1h5l2 1h1l1-1h3v1h2l3 1h5l1-1 1 1 1-1 2 1h6l2 1 3 1h1l2-1 2 1h8l2-1 2 1h4l2-1 2 1h4l1-1h9l3-1h4l1 1h4l2 1h18l3-1h4l1 1 1-1h2l1 1h7l2-1h1l1 1 4-1h11l2-1h2V4l1 1 4 1h1l2 1v1l4 1 4 1 3-1-1 1h2l1 1h2l-1 1h2l3 1 5 1 6 1 4 1 2 2 4-1h3l4 2 2-1h9l1 1h1l1-1 1 2 5-1h2l3-1 4 2 3 1 5 1 3-1 2 2 1 1 1 1h2l1 1 7 2h1l1 1h3l4 3 1-1 4 1 3 1h4l3 1 1 1h4l2 2h3l3 3h2l2 1h2l5 1 1-1 3 1 4 2v1l7-1-1 1h11l5 2h3l2-1v-2l2-1h9l3-2 4 1h5l3-1h5l5 1 1 1 2-1h5l2 1h4l4 1h4l2-1 4 2h1l2-1 2 1 1-2 1 1 2-1 1 1h15v1l3-1h1l3-1 1 1 1-1h2l6 2 1-1 3 1h3l3 1h3l8 2 5-1v1l2-1h1z"></path></svg></span>
                            <div class="footer-tagline-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
                                    <path d="M60.1 38H49v11h-2V38H35.9c1.931 9.368 6.626 17 12.1 17 5.474 0 10.171-7.632 12.1-17zm-25.145-9.5c-.003 2.511.19 5.019.577 7.5H47V18.522l-10.925.238a41.683 41.683 0 00-1.12 9.74zM47 2.31c-4.1 1.24-8.18 7.168-10.38 14.437L47 16.52V2.31z"></path>
                                    <path d="M57.52 9.45l1.784-.9a31.775 31.775 0 012.558 7.65l9.117-.2.042 2-8.78.19c.55 3.41.818 6.857.8 10.31a50.836 50.836 0 01-.54 7.5H72v2h-9.846c-1.6 8.2-5.244 15.053-9.862 17.754C66.834 54.079 76 43.793 76 28.589c0-8.962-2.958-16.353-8.554-21.373A25.424 25.424 0 0049 1.04v15.438l10.83-.236a29.32 29.32 0 00-2.31-6.791zM43.51 55.643c-4.525-2.78-8.086-9.564-9.665-17.643H24v-2h9.5a50.84 50.84 0 01-.549-7.5 43.776 43.776 0 011.075-9.7l-9.009.2-.042-2 9.562-.208c1.89-6.667 5.317-12.436 9.432-15.143C29.71 4.412 20 15.13 20 28.589a27.636 27.636 0 0023.51 27.054z"></path>
                                    <path d="M61.045 28.5a60.27 60.27 0 00-.818-10.265L49 18.479v17.52h11.468c.388-2.48.58-4.988.577-7.5zM91.7 60c-2.182 4.525-5.734 8.62-10.832 13.719l-1.414-1.414c6.6-6.6 10.511-11.424 12.08-17.7.072-.415.137-.832.215-1.278.607-3.48.262-5.951-1.027-6.068-.72-.066-1.559.68-1.947 2.3a30.158 30.158 0 01-2.454 8.148c-1.78 4.663-8.575 11.048-8.865 11.318l-1.366-1.461c.068-.063 6.8-6.391 8.381-10.62l.061-.133a30.644 30.644 0 002.526-9.148c.11-1.886.095-6.433-1.793-6.552-2.085-.132-2.537 3.505-3.367 7.379-.259 1.21-.89 3.456-1.153 4.243a1.55 1.55 0 01-.09.177c-1.386 4.053-5.32 7.859-5.515 8.045-2.984 2.983-9.707 9.74-9.707 9.74L64.01 69.3s6.726-6.761 9.727-9.761a28.158 28.158 0 003.064-3.6c.5-.788 1.452-2.646.55-3.572-1.148-1.178-3.287-.648-6.08.748-1.98.992-11.21 7.08-15.384 13.34-1.99 2.985-2.772 8.839-3.042 14.2l13.18 2.724 6.8 1.359a8.92 8.92 0 011-.778c7.075-4.74 14.663-11.833 17.317-16.54 3.566-6.32 1.988-7.52.558-7.42zM52.774 82.673l-.77 10.252 1.993.15.595-7.913 10.616 2.123 3.765.778L70.02 93.2l1.96-.4-.885-4.338 2.592.518.392-1.96-8.447-1.69-12.858-2.657zm-29.242 2.055l6.77-1.354 13.206-2.73c-.27-5.36-1.052-11.214-3.042-14.2-4.173-6.258-13.4-12.347-15.384-13.34-2.793-1.4-4.932-1.925-6.08-.747-.9.926.054 2.784.55 3.572a28.158 28.158 0 003.064 3.6c3 3 9.727 9.76 9.727 9.76l-1.418 1.41s-6.723-6.757-9.707-9.74c-.2-.186-4.129-3.992-5.515-8.045a1.74 1.74 0 01-.09-.177c-.263-.787-.894-3.033-1.153-4.243-.83-3.874-1.282-7.511-3.367-7.38-1.888.12-1.9 4.667-1.793 6.553a30.645 30.645 0 002.526 9.148l.061.133c1.58 4.229 8.313 10.557 8.381 10.62L18.9 69.034c-.29-.27-7.084-6.655-8.865-11.318a30.16 30.16 0 01-2.454-8.148c-.388-1.622-1.226-2.37-1.947-2.3-1.287.114-1.634 2.586-1.025 6.065.078.446.143.863.215 1.278C6.394 60.883 10.3 65.7 16.9 72.307l-1.41 1.414c-5.1-5.1-8.65-9.194-10.832-13.72-1.434-.104-3.013 1.1.553 7.42 2.654 4.706 10.238 11.8 17.321 16.529a8.92 8.92 0 011 .778zm7.175.605l-8.433 1.687.393 1.96 2.591-.518-.885 4.338 1.96.4 1.047-5.137 3.75-.775 10.631-2.126.595 7.913 1.994-.15-.77-10.252-12.873 2.66z"></path>
                                </svg>   
                                <p>${dataBase[5].footer.taglineTxt}</p>                         
                            </div>
                        </div>
                        <div class="foot-nav-container">
                            
                        </div>
                    </div>`
let storyCardInner=document.getElementById('story-card')
console.log(storyCardInner)

function footStoryCards(){
        let storyCardlen=(dataBase[5].footer.descBox).length
        console.log(storyCardlen)
        let storyCard=0
        let storyCardHead=0
        let storyCardPara=0
        let storyCardURL=0
        for(let i=0; i<storyCardlen;i++){
            storyCard=(dataBase[5].footer.descBox[i])            
            storyCardHead=(dataBase[5].footer.descBox[i].head)
            storyCardPara=(dataBase[5].footer.descBox[i].para)
            storyCardURL=(dataBase[5].footer.descBox[i].paraURL)
            storyCardInner.innerHTML +=`<div class="foot-story-card">
                                        <h3>${storyCardHead}</h3>
                                        <p>${storyCardPara} <a href="#">${storyCardURL}</a></p>                                        
                                    </div>`
        }

}
footStoryCards()


let footNavContainer=document.querySelector('.foot-nav-container')
console.log(footNavContainer)

function footNavContainerHead(){
    let navElemlen=(dataBase[5].footer.navElements).length
    console.log(navElemlen)
    let navElemHead=0
    for(let i=0;i<navElemlen;i++ ){
        navElemHead=(dataBase[5].footer.navElements[i].title)
        console.log(navElemHead)
        footNavContainer.innerHTML +=`<div class="foot-nav-card">
                                        <div class="foot-nav-head">
                                            <p>${navElemHead}</p>
                                            <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                                        </div>
                                        <ul class="element-list-items"></ul>
                                    </div>`
    }

}
footNavContainerHead()

let navNthChild = document.querySelector('.foot-nav-container').lastChild
console.log (navNthChild)
navNthChild.innerHTML+=`<div class="help-social-container">
                            <div class="download-card">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 2H6C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-1.3 16s-2.3-.1-3.3-.1H9l-2.6.1v-.7l.9-.2c.6-.1.7-.2.7-.7 0 0 .1-1.6.1-4.3 0-2.7-.1-4.4-.1-4.4 0-.5-.2-.6-.8-.7l-.8-.2v-.7l2.6.1h4.9c1 0 2.6-.2 2.6-.2s-.1 1-.1 3.4h-.7l-.2-.8c-.3-1.1-.7-1.6-1.4-1.6h-3.8c-.3 0-.3 0-.3.2v4.4s1.6 0 2.4-.1c.4.1.9-.3.9-.7v-.1l.2-1h.7l-.1 2.1.1 2.2h-.7l-.2-.8c-.1-.5-.5-.8-.9-.8-.6-.1-2.4-.1-2.4-.1V16c0 .7.4 1 1.2 1h2.6c.9.1 1.8-.4 2.1-1.2l.7-1.4h.6c-.1.4-.4 3-.5 3.6z"></path></svg></span>
                                <p>Download the Etsy App</>
                            </div>
                            <div class="social-card">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path><path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z"></path><circle cx="16.27" cy="7.735" r="0.96"></circle></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z"></path></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3c-4.97 0-9 4.03-9 9 0 3.813 2.372 7.072 5.72 8.384-.08-.712-.15-1.807.03-2.585.164-.703 1.056-4.475 1.056-4.475s-.27-.54-.27-1.336c0-1.252.726-2.187 1.63-2.187.768 0 1.14.577 1.14 1.268 0 .773-.493 1.928-.746 2.998-.212.896.45 1.626 1.333 1.626 1.6 0 2.83-1.687 2.83-4.12 0-2.156-1.55-3.663-3.76-3.663-2.56 0-4.064 1.922-4.064 3.907 0 .773.297 1.603.67 2.054.073.09.083.168.06.26-.067.283-.22.895-.25 1.02-.038.165-.13.2-.3.12-1.124-.523-1.827-2.167-1.827-3.487 0-2.84 2.063-5.446 5.947-5.446 3.122 0 5.548 2.225 5.548 5.198 0 3.102-1.956 5.598-4.67 5.598-.912 0-1.77-.474-2.063-1.033l-.56 2.14c-.204.78-.753 1.76-1.12 2.358.842.26 1.737.402 2.665.402 4.97 0 9-4.03 9-9s-4.03-9-9-9"></path></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.3,8.559V9.007a9.666,9.666,0,0,1-9.729,9.737,9.614,9.614,0,0,1-5.256-1.394,5.367,5.367,0,0,0,.814.057,6.906,6.906,0,0,0,4.245-1.621,3.412,3.412,0,0,1-3.186-2.379,3.339,3.339,0,0,0,1.548-.058A3.419,3.419,0,0,1,3.988,9.993V9.952a3.427,3.427,0,0,0,1.548.424A3.407,3.407,0,0,1,4,7.54a3.261,3.261,0,0,1,.465-1.662A9.729,9.729,0,0,0,11.517,9.39a3.588,3.588,0,0,1-.073-0.79,3.408,3.408,0,0,1,3.414-3.414,3.542,3.542,0,0,1,2.518,1.075,6.837,6.837,0,0,0,2.159-.831,3.391,3.391,0,0,1-1.507,1.9A6.657,6.657,0,0,0,20,6.782,6.927,6.927,0,0,1,18.3,8.559Z"></path></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20,12c0,5.664,0,5.664-8,5.664s-8,0-8-5.664,0-5.664,8-5.664S20,6.333,20,12Zm-5,0L10,9v6Z"></path></svg></a>
                            </div>
                        </div>`
let footFooter =document.getElementById('footer-container')
console.log(footFooter)
footFooter.innerHTML +=`<div class="foot-footer-container">
                            <div class ="lang-country-card">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2ZM9,18.883v0.528A7.938,7.938,0,0,1,4.06,11.06l3.385,3.385a2.967,2.967,0,0,0,1.649,4.4ZM17.5,15a2.509,2.509,0,0,0,.5-0.05V15a0.992,0.992,0,0,0,.927.985A8,8,0,0,1,12,20c-0.216,0-.427-0.016-0.639-0.032l1.254-2.5-0.015.006A2.968,2.968,0,0,0,13,16a2.988,2.988,0,0,0-5-2.221V11H9a1,1,0,0,0,1-1V9a1,1,0,0,0,1-1,1,1,0,0,0,0-2H6.726A7.9,7.9,0,0,1,14,4.263V6a1,1,0,0,0,2,0V5.082a8.047,8.047,0,0,1,2,1.649V7H17a1,1,0,0,0,0,2h2.411a7.941,7.941,0,0,1,.326,1H17a2.556,2.556,0,0,0-2,2.5A2.5,2.5,0,0,0,17.5,15Z"></path></svg></span>
                                <p>India &nbsp;&nbsp; | &nbsp;&nbsp; English (UK) &nbsp;&nbsp;| &nbsp;&nbsp; &#8377; (INR)</p>
                            </div> 
                            <div class="copy-terms-container">
                                <p class="copyright-card">${dataBase[5].footer.coprightCard}</p>
                                <div class="terms-box">
                                    <a href="#">Terms of Use</a>
                                    <a href="#">Privacy</a>
                                    <a href="#">Interest-based ads</a>
                                    <a href="#">Regions</a>                                
                                </div>
                            </div>            
                        </div>`



