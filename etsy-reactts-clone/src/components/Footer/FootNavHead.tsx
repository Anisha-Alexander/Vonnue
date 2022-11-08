import React, {useState,useEffect} from 'react'
import data from '../data.json'
import {HiChevronDown} from 'react-icons/hi'
import { DownloadEtsySvg } from './DonwloadEtsySvg'
import {InstaSvg,FacebookSvg,PinterestSvg,TwitterSvg,YoutubeSvg} from './SocialSvg'



const FootNavHead :React.FC =() => {
    const [display,setDisplay] = useState<boolean>(false)
    const cardsArr=data.footer.navElements
    const DisplayList=()=>{
        setDisplay(true)
    }
  return (
    <div className='foot-nav-box'>
        {
            cardsArr.map((cardsAr) =>(
                <div className='footnav-card'>
                    <button className='foot-nav-head' onFocus={DisplayList} onBlur={()=>{setDisplay(false)}}>
                        <p>{cardsAr.title}</p>
                        <span><HiChevronDown/></span>
                    </button>  
                    <ul className='element-list-items' style={{ display:display ? 'flex':'none'}}>
                        {
                            (cardsAr.options).map((card)=>(
                                <li>{card.value}</li>
                            )) 
                        }
                    </ul>            
                </div>
            ))
        }
        <div className='help-social-container'>
            <div className='download-card'>
                <span>{DownloadEtsySvg}</span>
                <p>{data.footer['Download-text']}</p>
            </div>
            <div className='social-card'>
                <a>{InstaSvg}</a>
                <a>{FacebookSvg}</a>
                <a>{PinterestSvg}</a>
                <a>{TwitterSvg}</a>
                <a>{YoutubeSvg}</a>
            </div>
        </div>  
    </div>
  )
}

export default FootNavHead