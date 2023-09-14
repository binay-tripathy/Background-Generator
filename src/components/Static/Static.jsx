import React from 'react'
import './Static.scss'

const Static = () => {
  const color = (e) => {
    console.log(e.target.value)
    document.getElementById('backsolid').style.background = e.target.value;
  }
  
  return (
    <>
    <div className="colorInputs">
      <label htmlFor="color"> Select the color : </label>
      <input type="color" name="color" id="color" defaultValue={'#ffffff'} onChange={color} />
      <span id="colorValue"></span>
    </div>
    <div id='backsolid'>
    </div>
    </>
  )
}

export default Static