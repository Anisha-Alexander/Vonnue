import React from 'react'

interface Props {
    title:string 
    imgUrl:string
    isCircle?:boolean
    desc?:string
    isPara?:boolean
}
const ImgCards:React.FC <Props> =({title,imgUrl,isCircle,desc,isPara}) => {
  return (
    <div className= {isCircle ? 'img-title-container' : 'section-main-img-card'} >
        <div className={isCircle ? 'card-img':'section-main-img-box'}>
            <img src={imgUrl}/>
        </div>     
        {
          (isPara)?
          (<div className='text-box'>
            <span>{title}</span>
            <h3>{desc}</h3>
          </div>)
          :<div className={isCircle? '' :'section-main-text-box'}><p className={isCircle? 'card-img-title':''}>{title}</p></div>
        }
        
                
    </div>
  )
}
// reused for bubble cards, section cards, article cards
export default ImgCards