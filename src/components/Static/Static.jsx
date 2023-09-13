import React from 'react'
import './Static.scss'

const Static = () => {
  const color = (e) => {
    document.getElementById('backsolid').style.background = e.target.value;
  }
  
  return (
    <>
    <div className="colorInput">
      <label htmlFor="color"> Select the color : </label>
      <input type="color" name="color" id="color" onChange={color} />
      <span id="colorValue"></span>
    </div>
    <div id='backsolid'>
    </div>
    </>
  )
}

export default Static