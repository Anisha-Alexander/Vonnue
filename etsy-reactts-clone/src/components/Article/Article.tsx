import React from 'react'
import data from "../data.json"
import "./Article.css"
import ImgCards from '../Main/ImgCards'
import { BiRightArrowAlt } from "react-icons/bi"

const Article : React.FC =() =>{
    const cardsArr= data.article.imgTextBox
  return (
    <article className='article'>
        <div className='article-label-card'>
            <h2>{data.article.artlabel}</h2>
            <BiRightArrowAlt/>
        </div>
        <div className='article-img-cards-cont'>
            {
                cardsArr.map(item =>(
                    <ImgCards imgUrl={item.imgURL} title={item.title} desc= {item.desc} isPara/>
                ))
            }
        </div>
    </article>
  )
}

export default Article