import React from 'react'
import Logo from "./images/logo.png"
import "./Components.css"
import Cover from "./images/cover.png"
import {useState} from "react"
import { List, List2 } from './List'
import ComponentsItem from './ComponentsItem'
import {Link} from "react-router-dom"

function Head() {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <div>
      <div className='top'>
      <Link to="/"><img src={Logo} /></Link>
        <h3><a href='https://bestcryptolibs.com/blog/'>Blog</a></h3>
        <Link to="/contact"><h3>Contact</h3></Link>
        <input type="text" placeholder="Search..." onChange={event=>{setSearchTerm(event.target.value)}} id="topinput"/>
        
      </div>
      <div className='mainV'>
        <h1>Find The Best Crypto Resources For Your Project</h1>
        <h1>For Your Project</h1>
        <img src={Cover}/>
        <p>A curated list of awesome crypto resources.</p>
        <select>
          <option>All</option><option>Bitcoin</option><option>Etherum</option><option>Dodge</option>
        </select>
        <input id='input2' type="text" placeholder="Find Components..." onChange={event=>{setSearchTerm(event.target.value)}}/>
              </div>
      <div>
      <h1>Popular Components</h1>
      <div className='d1'>
        {List.filter((val)=>{if(searchTerm==""){return val}
      else if (val.content.toLowerCase().includes(searchTerm.toLowerCase())){return val}
      }).map((val,key)=>{
        return ( <ComponentsItem key={key} image={val.image} title={val.title} content={val.content}/>)
      })}
      </div>
      <h1>Newest Components</h1>
      <div className='d1'>
        {List2.filter((val)=>{if(searchTerm==""){return val}
      else if (val.content.toLowerCase().includes(searchTerm.toLowerCase())){return val}
      }).map((val,key)=>{
        return ( <ComponentsItem key={key} image={val.image} title={val.title} content={val.content}/>)
      })}
      </div>
      </div>
    </div>
  )
}

export default Head