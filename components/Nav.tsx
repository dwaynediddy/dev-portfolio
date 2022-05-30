import Link from 'next/link'
import React from 'react'

import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className="navbar-container">
        <Link href='/' className="nav-logo">DIDDY</Link>
        <div className="navbar-link-container">
          <div className="nav-routes">
              <Link href="" className="nav-links">About</Link>
              <Link href="" className="nav-links">Contacts</Link>
              <Link href="" className="nav-links">Projects</Link>
          </div>
        </div>
        <div className="nav-socials">
          <Link href='/'>
            <AiFillLinkedin className='nav-links' />  
          </Link>
          <Link href='/'>
            <AiFillTwitterSquare className='nav-links' />     
          </Link>
          <Link href='/'>
            <AiOutlineGithub className='nav-links' />   
          </Link>
          <div className="hamburger">hamburger</div>
        </div>
      </div>

  )
}

export default Nav