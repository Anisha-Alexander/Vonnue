import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-btns'>
                <button className='play-btn button'>Play</button>
                <button className='my-list button'>My List</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet,porro dolor corporis perferendis esse sunt error, recusandae aliquam inventore dolores!ium quasi ex nesciunt nam.             
            ?</h1>            
        </div>
        <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner