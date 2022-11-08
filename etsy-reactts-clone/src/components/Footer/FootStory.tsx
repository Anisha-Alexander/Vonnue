import React from 'react'
import data from '../data.json'

const FootStory:React.FC = () => {
    const footData=data.footer
    const dataArr=data.footer.descBox
  return (
    <div id='story-container'>
        <div className='story-head-box'>
            <h2>{footData.labelHead}</h2>
            <a>{footData.labelLink}</a>
        </div>
        <div className='story-card'>
            {
                dataArr.map((item)=>(
                    <div className='foot-story-card'>
                        <h3>{item.head}</h3>
                        <p>{item.para}<a>{item.paraURL}</a></p>
                    </div>
                ))
            }
        </div>
        <div className='story-foot-box'>
            <h4>{footData.storyFootHead}</h4>
            <button id='help-btn'>
                <a >{footData.storyFootLink}</a>
            </button>
        </div>
    </div>
  )
}

export default FootStory