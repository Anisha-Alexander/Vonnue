import { title } from 'process'
import React, { useState, useEffect } from 'react'
import data from '../data.json'
import "./Header.css"

// export interface HeaderProps {
//   signTxt: string;
// }

const Header = () => {
  const [isfocus, setIsfocus] = useState<boolean>(false)

  return (
    <nav className='nav-container'>
      <div className='nav-header-container-mob'>
        <a href='#' className='nav-title'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" aria-hidden="true" focusable="false"><path d={data.header.title}></path></svg>
        </a>
        <div className='search-input-container'>
          <input type="text" className="search-box background" placeholder="Search" />
          <button type="button" id="search-icon" className="search-icon background">
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

