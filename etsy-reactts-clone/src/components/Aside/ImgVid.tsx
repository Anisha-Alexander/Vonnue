import React from 'react'
import data from '../data.json'
import LikeBtn from '../LikeBtn'
import VidBtn from '../VidBtn'

const ImgVid: React.FC = () => {
    const cardsArr=data.aside.imgs
    const img:string="jpg"
    const vid:string="mp4"
    let urlItem=""
  return (
    <div className='aside-img-box'>
        {
            cardsArr.map((item) =>(
                <div className='card-box'>
                    {
                        ((item.backURL).includes(vid)) 
                        ? (<div className='vid-box'><video src={item.backURL}/><VidBtn/></div>):
                        (<img src={item.backURL}/>)
                    }
                    <span className='price-box'>{item.cost}</span>
                    <LikeBtn/>
                </div>        
            ))
        }
        
    </div>
  )
}

export default ImgVid