import React, { useContext, useState, useEffect } from "react";
import data from '../data.json'
import { BiRightArrowAlt } from "react-icons/bi"
import ImgCards from '../Main/ImgCards'
import './Section.css'

const Section: React.FC = () => {
    const sCardsArr = data.section.pictureCard
    return (
        <section className="section-main">
            <div className="section-main-label">
                <a href="#" id="section-main-label-card">
                    <h2>{data.section.label}</h2>
                    <BiRightArrowAlt/>
                </a>
            </div>
            <div className="section-main-img-cards-cont">
        {
            sCardsArr.map((item) =>(
                    <ImgCards title={item.title} imgUrl={item.img}/>              
            ))
        }
    </div>
        </section>
    )
}

export default Section 