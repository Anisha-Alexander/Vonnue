import React from 'react'
import data from '../data.json'
import './Aside.css'
import ImgVid from './ImgVid'
import { BiRightArrowAlt } from "react-icons/bi"

const Aside: React.FC  = () => {
    const cardsArr=data.aside.imgs
    // const img:string="jpg"
    // const vid:string="mp4"
    // let url=""
    
   
  return (
    <aside>
        <div className='aside-head-text-box'>
            <span>{data.aside.label}</span>
            <h2>{data.aside.title}</h2>
            <p>{data.aside.text}</p>
        </div>
        <ImgVid/>
        <div className='aside-more'>
            <p>{data.aside.more}</p>
            <BiRightArrowAlt/>
        </div>
    </aside>
  )
}

export default Aside