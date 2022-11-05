import React from 'react'

interface Props {
    title:string 
    imgUrl:string
}
const ImgCards:React.FC <Props> =({title,imgUrl}) => {
  return (
    <div className='img-title-container'>
        <div className='card-img'>
            <img src={imgUrl}/>
        </div>
        <p className='card-img-title'>{title}</p>        
    </div>
  )
}

export default ImgCards