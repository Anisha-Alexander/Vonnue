import React from 'react'

import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' :''
  return (
    <div class={`${className} font-xl`}>StyleSheet</div>
  )
}

export default StyleSheet