import React, { useState, useEffect } from 'react'
import data from '../data.json'
import "./Header.css"


const Header = () => {
  const [isfocus, setIsfocus] = useState<boolean>(false)
  const handleFocus =() =>{
    setIsfocus(true)
  }
  const changeFocus = () =>{
    setIsfocus(false)
  }

  return (
    <nav className='nav-container' >
      <div className='nav-header-container-mob' >
        <a href='#' className='nav-title'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" aria-hidden="true" focusable="false"><path d={data.header.title}></path></svg>
        </a>
        <div className='search-input-container'style={{backgroundColor : isfocus ? 'white' :'rgba(34, 34, 34, 0.05)',width: isfocus ? '100vw':'160px',position: isfocus? 'absolute':'static',left : isfocus ?'0':'auto',zIndex:isfocus?'100':'0'}} >
          <input type="text" className="search-box background" placeholder="Search" onFocus={handleFocus} onBlur={changeFocus} />
          <button type="button" id="search-icon" className="search-icon background" style={{backgroundColor: isfocus? 'black' : 'transparent',fill:isfocus?'white':'black'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={data.header.searchIcon}></path>
              <path d={data.header.searchIconHandle}></path>
            </svg>
          </button>
        </div>
        <ul className='nav-header-left-card'>
          <li>
            <a className='user-icon-tab'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={data.header.userIcon}></path>
                <path d={data.header.userIconHandle}></path>
              </svg>
            </a>
          </li>
          <li>
            <a className='left-header-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={data.header.basketIcon}></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

