import React from 'react'
import ImgCards from './ImgCards'
import data from '../data.json'
import "./Main.css"


const cardsArr = data.cardsLabelContainerMainHead.cards
console.log(cardsArr)


const Main:React.FC =()=> {
    return (
        <main className='main-container' id='main-container'>
            <h1 className='main-label-text'>{data.cardsLabelContainerMainHead.labelText}</h1>
            <div className='cards-container'> 
                {
                    cardsArr.map((elem) =>(
                        <ImgCards title={elem.title} imgUrl={elem.imageURL} isCircle/>                       
                    ))
                }                
            </div>
        </main>
    )
}

export default Main