import Nav from './Nav'
import Footer from './Footer'

import { useState } from 'react'

export default function Layout({ children }: any) {
  const [mode, setMode] = useState(true)

  return (
    <div className="light">
    {/* <div className={mode ? "dark" : "light"}> */}
      <Nav />
      <main>{children}</main>
      {/* <button onClick={(() => setMode(!mode))}><h2>toggle</h2></button> */}
      <Footer />
    </div>
  )
}