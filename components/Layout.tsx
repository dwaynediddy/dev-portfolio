import Nav from './Nav'
import Footer from './Footer'

import { useState } from 'react'
import { set } from 'mongoose'


export default function Layout({ children }: any) {
  
  const [ mode, setMode ] = useState(true)
  
  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <div className={mode ? "dark" : 'light'}>
      <Nav />
      <main>{children}</main>
      <button onClick={toggleMode}><h1>toggle</h1></button>
      <Footer />
    </div>
  )
}