import React from 'react'
import { useState } from 'react'

const ToggleMode = () => {
    const [ mode, setMode ] = useState(true)
    const toggleMode = () => {
        setMode(!mode)
    }
  return (
    <div className={mode ? 'light' : 'dark'}>
        <input 
          type="checkbox" 
          className="toggle" 
          id="default"
          onClick={toggleMode} 
        />
        <label htmlFor="default" data-checked="dark" data-unchecked="light"/>

    </div>
  )
}

export default ToggleMode