import React from 'react'
import { Border } from '../Border'
import FootStory from './FootStory'
import './Footer.css'
import { FooterTagSvg } from './FooterTagSvg'
import data from '../data.json'
import { BlueBorder } from './BlueBorder'

const Footer:React.FC = () => {
  return (
    <footer className='footer-container'>
        <span className='svg-border'>
            {Border}
        </span>
        <FootStory/>
        <div className='footer-main-container'>
            <div className='footer-main-head-box'>
                <span className='blue-svg-border'>{BlueBorder}</span>
                <div className='footer-tagline-box'>
                    {FooterTagSvg}
                    <p>{data.footer.taglineTxt}</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer