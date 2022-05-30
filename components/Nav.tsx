import Link from 'next/link'
import React from 'react'

import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className="navbar-container">
        <Link href='/' className="nav-logo">DIDDY</Link>
        <div className="navbar-link-container">
          <div className="nav-routes">
            <div className="nav-top-links">
              <Link href="/about" >About</Link>
            </div>
            <div className="nav-top-links">
              <Link href="/contact" >Contacts</Link>
            </div>
            <div className="nav-top-links">
              <Link href="/projects" >Projects</Link>
            </div>
          </div>
        </div>
          <div className="hamburger">hamburger</div>
      </div>

  )
}

export default Nav