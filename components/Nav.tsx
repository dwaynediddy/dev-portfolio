import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {

  const [isActive, setIsActive] = useState(true)
  
  return (
    <div className="navbar-container">
        <Link href='/' className="nav-logo">DIDDY</Link>
        <div className="navbar-link-container">
          <div className="nav-routes">
            <div className="nav-top-links">
              <Link href="/about" >About</Link>
            </div>
            <div className="nav-top-links">
              <Link href="/contact" >Contact</Link>
            </div>
            <div className="nav-top-links">
              <Link href="/projects" >Projects</Link>
            </div>
          </div>
        </div>
          <div className={isActive ? "hamburger" : "hamburger close"} onClick={() => setIsActive(!isActive)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
      </div>

  )
}

export default Nav