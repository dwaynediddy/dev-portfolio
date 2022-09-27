import Nav from './Nav'
import Footer from './Footer'

import { useState } from 'react'
import ToggleMode from './ToggleMode'

export default function Layout({ children }: any) {
  const [mode, setMode] = useState(true)

  const toggle = () => {
    setMode(!mode)
  }

  return (
    <div className={mode ? "dark" : "light"}>
      <Nav />
      <main>{children}</main>
       <div>
        <input 
          type="checkbox" 
          className="toggle" 
          id="default"
          onClick={toggle} 
        />
        <label htmlFor="default" data-checked="dark" data-unchecked="light"/>
      </div> 
      <Footer />
    </div>
  )
}