import dataBase from "./data.json" assert{type:'json'}


// --------------------------------------------------------header----------------------------------------------------------------------------
const headerEl= document.getElementById('header-el')

    // header mobile view
    const headContMob = document.createElement('div')
    headContMob.classList.add('header-container-mob')
    headerEl.appendChild(headContMob)

        // left-head-mob
        let leftHeadMob= document.createElement('div')
        leftHeadMob.classList.add('left-header-mob')

            // elements            
            let arrowCardMob=document.createElement('div')
            arrowCardMob.classList.add('arrow-card-mob')
            arrowCardMob.innerHTML=`<svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>`

            let logoCardMob= document.createElement('div')
            logoCardMob.classList.add('logo-card-mob')
            logoCardMob.innerHTML=`<img src="${dataBase.header.mobile.logo}" style="width: 23px;">`

            let brandNameCardMob =document.createElement('div')
            brandNameCardMob.classList.add('brand-name-card-mob')
            brandNameCardMob.innerHTML=`<h1>${dataBase.header.mobile.brandName}</h1>`

        // apppending leftheadmob elemts

        leftHeadMob.appendChild(arrowCardMob)
        leftHeadMob.appendChild(logoCardMob)
        leftHeadMob.appendChild(brandNameCardMob)


        // right-head-mob
        let rightHeadMob= document.createElement('div')
        rightHeadMob.classList.add('right-header-mob')
            
            // elements
            let searchIconMob =document.createElement('div')
            searchIconMob.classList.add('search-icon-mob')
            searchIconMob.innerHTML=`<svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`

            let cartIconMob= document.createElement('div')
            cartIconMob.classList.add('cart-icon-mob')
            cartIconMob.innerHTML=`<svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path><path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path><path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path><path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path><path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path></g></svg>`

            let loginContainerMob = document.createElement('div')
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
    let navElementsContainerMob= document.createElement('div')
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
//append nav  for des k!!-----------------
navEl.appendChild(navShadowImageMob)


// ----------------------------------------------main----------------------------------------------------------------

const main= document.getElementById('main-el')











// --------------------------SortBox-------------------------------------

let sortWindow = document.getElementById('sort-window')

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
                                                            <div class="sort-btn-img-click"><img src="${dataBase.sortBtnImgClick}" loading="lazy" alt="" style="width: 100%; height: 100%; margin: auto; object-fit: contain; opacity: 1;"></div>`
                sortTypesCont.append(sortTypesCard)
        
                
                
        });
        
        
        console.log(sortTypearr)
        // let sortBtnImgArr=[]
sortWindow.appendChild(sortLabel)
sortWindow.appendChild(sortTypesCont)
let sortBtnImgArr=document.querySelectorAll('.sort-btn-img')
console.log(sortBtnImgArr)
let sortBtnImgClickArr=document.querySelectorAll('.sort-btn-img-click')
console.log(sortBtnImgClickArr)

let sortBtnImgFunct=sortBtnImgArr.forEach((item,idx) =>{
    item.addEventListener('click',() =>{
        item.classList.add('display-none-sort')
        
    })
})
let sortBtnImgClickFunct=sortBtnImgClickArr.forEach((item) =>{
    item.addEventListener('click',()=>{
        item.classList.add('.display-blue-sort')
    })
    
})

