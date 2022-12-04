import React from 'react'
import "./Components.css"
import Logo from "./images/logo.png"
import "./Components.css"
import {Link} from "react-router-dom"

function Contact() {
  return (
    <div>
        <div className='top'>
        <Link to="/"><img src={Logo} /></Link>
        <h3><a href='https://bestcryptolibs.com/blog/'>Blog</a></h3>
        
        
      </div>
      <div className='conBody'>
        <h1>Contact Us</h1>
        <form>
        <input name="email" placeholder="Enter email..." type="email" />
        <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact