import dataBase from "./data.json" assert{type:'json'}

// body
let bodyEl= document.getElementById('body-el')
console.log(bodyEl)

// --------------------------------------------------------header----------------------------------------------------------------------------
const headerEl= document.getElementById('header-el')

    // header mobile view
    const headContMob = document.createElement('div')
    headContMob.classList.add('header-container-mob')
    headerEl.appendChild(headContMob)

        // left-head-mob
        const leftHeadMob= document.createElement('div')
        leftHeadMob.classList.add('left-header-mob')

            // elements            
            const arrowCardMob=document.createElement('div')
            arrowCardMob.classList.add('arrow-card-mob')
            arrowCardMob.innerHTML=`<svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>`

            const logoCardMob= document.createElement('div')
            logoCardMob.classList.add('logo-card-mob')
            logoCardMob.innerHTML=`<img src="${dataBase.header.mobile.logo}" style="width: 23px;">`

            const brandNameCardMob =document.createElement('div')
            brandNameCardMob.classList.add('brand-name-card-mob')
            brandNameCardMob.innerHTML=`<h1>${dataBase.header.mobile.brandName}</h1>`

        // apppending leftheadmob elemts

        leftHeadMob.appendChild(arrowCardMob)
        leftHeadMob.appendChild(logoCardMob)
        leftHeadMob.appendChild(brandNameCardMob)


        // right-head-mob
        const rightHeadMob= document.createElement('div')
        rightHeadMob.classList.add('right-header-mob')
            
            // elements
            const searchIconMob =document.createElement('div')
            searchIconMob.classList.add('search-icon-mob')
            searchIconMob.innerHTML=`<svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`

            const cartIconMob= document.createElement('div')
            cartIconMob.classList.add('cart-icon-mob')
            cartIconMob.innerHTML=`<svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path><path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path><path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path><path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path><path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path></g></svg>`

            const loginContainerMob = document.createElement('div')
            loginContainerMob.classList.add('login-container-mob')
            loginContainerMob.innerHTML=`<span>${dataBase.header.mobile.loginText}</span>`

        rightHeadMob.appendChild(searchIconMob)
        rightHeadMob.appendChild(cartIconMob)
        rightHeadMob.appendChild(loginContainerMob)


    headContMob.appendChild(leftHeadMob)
    headContMob.appendChild(rightHeadMob)

    //header desktop view (pending !!!)

headerEl.appendChild(headContMob)

//--------------------------------------------------------nav------------------------------------------------------
const navEl= document.getElementById('nav-el')

    // nav for Mobile View (sort & filter)
    const navElementsContainerMob= document.createElement('div')
    navElementsContainerMob.classList.add('nav-elements-container-mob')
        
        //Sort Card Mobile
        let sortCardMob=document.createElement('div')
        sortCardMob.classList.add('sort-card')
            //elements
            let sortIcon=document.createElement('div')
            sortIcon.classList.add('sort-icon')
            sortIcon.innerHTML=`<img src="${dataBase.nav.mobile.sortIcon}" style="width:24px;height:24px;margin:auto;object-fit:contain;opacity:1" loading="lazy" alt="">`

            let sortText=document.createElement('div')
            sortText.classList.add('sort-text')
            sortText.innerHTML=`<p>${dataBase.nav.mobile.sortText}</p>`
            
        sortCardMob.appendChild(sortIcon)
        sortCardMob.appendChild(sortText)


        //Filter Card Mobile
        let filterCardMob = document.createElement('div')
        filterCardMob.classList.add('filter-card')
            
            // elements
            let filterIcon= document.createElement('div')
            filterIcon.classList.add('filter-icon')
            filterIcon.innerHTML=`<img src="${dataBase.nav.mobile.filterIcon}" style="width:24px;height:24px;margin:auto;object-fit:contain;opacity:1" loading="lazy" alt="">`
            let filterText = document.createElement('div')
            filterText.classList.add('filter-text')
            filterText.innerHTML=`<p>${dataBase.nav.mobile.filterText}</p>`
        
        filterCardMob.appendChild(filterIcon)
        filterCardMob.appendChild(filterText)

    navElementsContainerMob.appendChild(sortCardMob)
    navElementsContainerMob.appendChild(filterCardMob)

    // nav for desktop (pending !!!!!)

    //nav border-bottom shadow img
    let navShadowImageMob=document.createElement('div')
    navShadowImageMob.classList.add('shadow-image-mob')
    navShadowImageMob.innerHTML=`<img src="${dataBase.nav.mobile.shadowImage}" style="width:100%;height:100%;margin:auto;object-fit:fill;opacity:1" loading="auto" alt="" height=""></img>`


navEl.appendChild(navElementsContainerMob)
//append nav  for desk!!-----------------
navEl.appendChild(navShadowImageMob)


// ----------------------------------------------main----------------------------------------------------------------

const main= document.getElementById('main-el')
console.log(main)

    // main head for desktop (pending !!!!)--------------------
    const mainHeadDesk= document.createElement('div')
    mainHeadDesk.classList.add('main-head-container-desk')

    //main container mob
    const mainContMob= document.createElement('div')
    mainContMob.classList.add('main-container-mob')
        // looping to create each card 

    let cardsArr=dataBase.main.mobiles
    console.log(cardsArr)
    
    function cardsFunct(a){
    a.forEach((item) =>{
        let mobileSpecContMob=document.createElement('div')
        mobileSpecContMob.classList.add('mobile-spec-container-mob')
            
            //elements inside the card
                //like container
            const likeCont= document.createElement('div')
            likeCont.classList.add('like-container')
            likeCont.innerHTML=`<img src="${dataBase.main.likeImg}" style="width:18;height:22;object-fit:contain;opacity:1" loading="lazy" alt="">`
            // -------------------------------------------------------------------------------------------------------------------------------------------
                // img and specifications  cards(main !!!)
            const mobImgDetCard= document.createElement('div')
            mobImgDetCard.classList.add('mobile-img-detail-card')

                // elements 
                    // img compare box 
                    const imgCompBox= document.createElement('div')
                    imgCompBox.classList.add('img-compare-box')
                        // imgbox 
                        const imgBox=document.createElement('div')
                        imgBox.classList.add('img-box')
                        imgBox.innerHTML=`<img src="${item.imgURL}">`
                        // likebox desk
                        const likeContDesk=document.createElement('div')
                        likeContDesk.classList.add('like-container-desk')
                        likeContDesk.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>`
                        // add comparedesk
                        const addCompDesk= document.createElement('div')
                        addCompDesk.classList.add('add-compare-check','check-box-card')
                        addCompDesk.innerHTML=`<div class="check-box"> </div>
                        <p>Add to Compare</p> `
                    imgCompBox.appendChild(imgBox)
                    imgCompBox.appendChild(likeContDesk)
                    imgCompBox.appendChild(addCompDesk)

                    // detail box
                    const detailBoxMob=document.createElement('div')
                    detailBoxMob.classList.add('detail-box')

                        // item name
                        const itemName=document.createElement('div')
                        itemName.classList.add('item-name')
                        itemName.innerHTML=`<p>${item.itemName}</p>`
                        // rating container
                        const ratingCont= document.createElement('div')
                        ratingCont.classList.add('rating-container')
                            // rating card
                            const ratingCard= document.createElement('div')
                            ratingCard.classList.add('rating-card')
                            ratingCard.innerHTML=`<span class="rating">${item.rating}</span>
                            <span>★</span>`                        
                        ratingCont.appendChild(ratingCard)
                        ratingCont.innerHTML+=`<p>${item.ratedCustomers}</p>                                            
                                            <img src="${item.plusAssured}" loading="lazy" alt="" style="width: 55.02; height: 14; object-fit: contain; opacity: 1;">`

                        // price delivery box
                        const priceDelBox= document.createElement('div')
                        priceDelBox.classList.add('price-delivery-box')
                            // prices
                            const prices=document.createElement('div')
                            prices.classList.add('prices')
                            prices.innerHTML=`<span class="mrp">${item.prices.discount}</span>
                                            <span class="cost">${item.prices.cost}</span>`

                            // free delivery box
                            const freeDel= document.createElement('div')
                            freeDel.classList.add('free-delivery')
                            freeDel.innerHTML+=`<p>${item.delivery}</p>`
                            
                        priceDelBox.appendChild(prices)
                        priceDelBox.appendChild(freeDel)

                        // bank offer
                        const bankOffer= document.createElement('div')
                        bankOffer.classList.add('bank-offer')
                        bankOffer.innerHTML=`<p>${item.offer}</p>`

                    
                    detailBoxMob.appendChild(itemName)
                    detailBoxMob.appendChild(ratingCont)
                    detailBoxMob.appendChild(priceDelBox)
                    detailBoxMob.appendChild(bankOffer)

                    // detail-box-desk(pending)
                   

            mobImgDetCard.appendChild(imgCompBox)
            mobImgDetCard.appendChild(detailBoxMob)            
            // append detail box for desktop

            // -------------------------------------------------------------------------------------------------------------------------------------------
                //specification card
            const specCardMob=document.createElement('div')
            specCardMob.classList.add('spec-card-mob')
            let specArrMob= item.specificiations        
            let specFunctMob=specArrMob.forEach((e) =>{
                // elements
                let specItem=document.createElement('div')
                specItem.classList.add('spec-box-mob')
                specItem.innerHTML +=`<p>${e.value}</p>`
                specCardMob.appendChild(specItem)                
            })
            


        mobileSpecContMob.appendChild(likeCont)
        mobileSpecContMob.appendChild(mobImgDetCard)
        mobileSpecContMob.appendChild(specCardMob)


        mainContMob.appendChild(mobileSpecContMob)

    })
}

cardsFunct(cardsArr)

main.appendChild(mainHeadDesk)
main.appendChild(mainContMob)


// --------------------------SortBox-------------------------------------

let sortWindowCont= document.querySelector('.sort-container')
console.log(sortWindowCont)

const sortbackground=document.createElement('div')
sortbackground.setAttribute('id','block')

let sortWindow = document.createElement('div')
sortWindow.setAttribute('id','sort-window')

sortWindowCont.appendChild(sortbackground)
sortWindowCont.appendChild(sortWindow)


    let sortLabel=document.createElement('div')
    sortLabel.classList.add('sort-label')
    sortLabel.innerHTML+= `<h2>${dataBase.sortLabel}</h2>`

    let sortTypesCont=document.createElement('div')
    sortTypesCont.classList.add('sort-type-container')
        let sortTypearr=[]
        sortTypearr=dataBase.sortType
        let sortfunct=sortTypearr.forEach((item) => {
                let sortTypesCard=document.createElement('div')
                sortTypesCard.classList.add('sort-type-card')

                sortTypesCard.innerHTML+=`<p>${item.value}</p><div class="sort-btn-img"><img src=${dataBase.sortBtnImg} loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"></div>
                                                           `
                sortTypesCont.append(sortTypesCard)
        
                
                
        });
        
        
        console.log(sortTypearr)
sortWindow.appendChild(sortLabel)
sortWindow.appendChild(sortTypesCont)

// displaying sort window 

    sortCardMob.addEventListener('click',() =>{
        sortWindowCont.style.display='block';
        sortWindow.classList.add('sort-transition')
        bodyEl.style.overflow='hidden';
    })

// hidding sort window

    sortbackground.addEventListener('click',() =>{
        sortWindowCont.style.display='none';
        sortWindow.classList.remove('sort-transition')
        bodyEl.style.overflow='visible';
    })


    
// sorting functions

    // sorting by popularity         
    let popuplarityEl= document.querySelector('.sort-type-card:nth-child(1)')
    console.log(popuplarityEl)
    
    popuplarityEl.addEventListener('click',()=>{
        let sortBtnImg=document.querySelector('.sort-type-card:nth-child(1) .sort-btn-img')
        console.log(sortBtnImg)  
        sortBtnImg.innerHTML=`<img src="${dataBase.sortBtnImgClick}" loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        let sortBtnImgRest=document.querySelectorAll('.sort-type-card:nth-child(2) .sort-btn-img, .sort-type-card:nth-child(3) .sort-btn-img, .sort-type-card:nth-child(4) .sort-btn-img')
        let a= sortBtnImgRest.forEach((item) =>{
            item.innerHTML=`<img src=${dataBase.sortBtnImg} loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        })
        sortWindowCont.style.display='none';
        sortWindow.classList.remove('sort-transition')
        bodyEl.style.overflow='visible';
        let sortPoparr=0
        function sortPop(){
            mainContMob.innerHTML=``
            sortPoparr=dataBase.main.mobiles
            const sortPop= sortPoparr.sort((a,b)=>(a.sortPop > b.sortPop ? -1: 1));
            console.log(sortPop)
        }
        sortPop()
        cardsFunct(sortPoparr)
    })


    // sorting by price low to high
    let lowToHighEl= document.querySelector('.sort-type-card:nth-child(2)')
    console.log(lowToHighEl)
    lowToHighEl.addEventListener('click',()=>{
        let sortBtnImg=document.querySelector('.sort-type-card:nth-child(2) .sort-btn-img')
        console.log(sortBtnImg)  
        sortBtnImg.innerHTML=`<img src="${dataBase.sortBtnImgClick}" loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        let sortBtnImgRest=document.querySelectorAll('.sort-type-card:nth-child(1) .sort-btn-img, .sort-type-card:nth-child(3) .sort-btn-img, .sort-type-card:nth-child(4) .sort-btn-img')
        let a= sortBtnImgRest.forEach((item) =>{
            item.innerHTML=`<img src=${dataBase.sortBtnImg} loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        })
        sortWindowCont.style.display='none';
        sortWindow.classList.remove('sort-transition')
        bodyEl.style.overflow='visible';
        const sortLHarr= dataBase.main.mobiles
        let sortPriceLH=0
        function sortLH(){
            mainContMob.innerHTML=``
            sortPriceLH = sortLHarr.sort((a,b)=>(a.sortPice < b.sortPice ? -1: 1));
            console.log(sortPriceLH)
        }
        sortLH()
        cardsFunct(sortPriceLH)

    })


    // sorting by price high to low 
    let highToLowEl= document.querySelector('.sort-type-card:nth-child(3)')
    console.log(highToLowEl)
    highToLowEl.addEventListener('click',() =>{
        let sortBtnImg=document.querySelector('.sort-type-card:nth-child(3) .sort-btn-img')
        console.log(sortBtnImg)  
        sortBtnImg.innerHTML=`<img src="${dataBase.sortBtnImgClick}" loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        let sortBtnImgRest=document.querySelectorAll('.sort-type-card:nth-child(1) .sort-btn-img, .sort-type-card:nth-child(2) .sort-btn-img, .sort-type-card:nth-child(4) .sort-btn-img')
        let a= sortBtnImgRest.forEach((item) =>{
            item.innerHTML=`<img src=${dataBase.sortBtnImg} loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        })
        sortWindowCont.style.display='none';
        sortWindow.classList.remove('sort-transition')
        bodyEl.style.overflow='visible';
        let sortHLarr=dataBase.main.mobiles
        let sortPriceHL=0
        function sortHL(a){
            mainContMob.innerHTML=``
            sortPriceHL= sortHLarr.sort((a,b) =>(a.sortPice < b.sortPice ? 1: -1));
            console.log(sortHLarr);       
        }
        sortHL()
        cardsFunct(sortPriceHL)
    })


    //sorting  the newest  by date
    let newestEl = document.querySelector('.sort-type-card:nth-child(4)')  
    console.log(newestEl)
    newestEl.addEventListener('click',()=>{
        let sortBtnImg=document.querySelector('.sort-type-card:nth-child(4) .sort-btn-img')
        console.log(sortBtnImg)  
        sortBtnImg.innerHTML=`<img src="${dataBase.sortBtnImgClick}" loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        let sortBtnImgRest=document.querySelectorAll('.sort-type-card:nth-child(1) .sort-btn-img, .sort-type-card:nth-child(2) .sort-btn-img, .sort-type-card:nth-child(3) .sort-btn-img')
        let a= sortBtnImgRest.forEach((item) =>{
            item.innerHTML=`<img src=${dataBase.sortBtnImg} loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;">`
        })
        sortWindowCont.style.display='none';
        sortWindow.classList.remove('sort-transition')
        bodyEl.style.overflow='visible';
        const sortDatearr= dataBase.main.mobiles
        let sortDate=0
        function sortDateF(){
            mainContMob.innerHTML= ``
            sortDate =sortDatearr.sort((a,b) =>(a.date < b.date ? 1: -1));
            console.log(sortDate)
        }
        sortDateF()
        cardsFunct(sortDate)
    })
    
// filter data funct

let filterarr= dataBase.main.mobiles

const filter=filterarr.filter(function(item){
    return item.sortPice <10000 && item.sortPice>7000})
console.log(filter)




