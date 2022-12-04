import React from 'react'

import "./Components.css"

function ComponentsItem({image, title, content}) {
  return (
   
    <div className='ComponentsItem'>
         <div style={{backgroundImage:`url(${image})`}}></div>   
        
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
    
  )
}

export default ComponentsItem