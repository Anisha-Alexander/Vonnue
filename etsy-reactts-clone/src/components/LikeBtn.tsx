import React from 'react'
import data from './data.json'

function LikeBtn() {
  return (
    <div className='like-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={data.likeBtn}></path></svg>
    </div>
  )
}

export default LikeBtn