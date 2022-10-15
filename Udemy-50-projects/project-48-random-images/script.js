const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows= 110

for(let i =0 ; i<rows *10;i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL} ${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return  `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random()* 10) + 300
}