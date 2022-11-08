import React from 'react'
import { Border } from '../Border'
import FootStory from './FootStory'
import './Footer.css'
import { FooterTagSvg } from './FooterTagSvg'
import data from '../data.json'
import { BlueBorder } from './BlueBorder'
import FootNav from './FootNav'
import {GlobeSvg} from './SocialSvg'

const Footer:React.FC = () => {
    const termsArr = data.footer.Terms
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
        <FootNav/>
        <div className='foot-footer-container-back'>
            <div className='foot-footer-container'>
                <div className='lang-country-card'>
                    <span>{GlobeSvg}</span>
                    <p>India &nbsp;&nbsp; | &nbsp;&nbsp; English (UK) &nbsp;&nbsp;| &nbsp;&nbsp; ₹ (INR)</p>
                </div>
                <div className="copy-terms-container">
                    <p className="copyright-card">&#169;{data.footer.coprightCard}</p>
                    <div className="terms-box">
                    {
                        termsArr.map((item) =>(
                            <a href='#'>{item.value}</a>
                        ))
                    }
                    </div>                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer