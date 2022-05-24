import Link from 'next/link'
import React from 'react'

import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className="navbar-container load">
        <Link href='/' className="nav-logo">DIDDY</Link>
        <div className="nav-routes">
            <Link href="" className="nav-links">About</Link>
            <Link href="" className="nav-links">Contacts</Link>
            <Link href="" className="nav-links">Projects</Link>
        </div>
        <div className="nav-socials">
        <Link href='/'>
              <AiFillLinkedin className='social-btn' />  
            </Link>
            <Link href='/'>
              <AiFillTwitterSquare className='social-btn' />     
            </Link>
            <Link href='/'>
              <AiOutlineGithub className='social-btn' />   
            </Link>
        </div>
    </div>
  )
}

export default Nav