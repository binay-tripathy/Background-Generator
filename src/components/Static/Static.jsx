import React from 'react'
import './Static.scss'

const Static = () => {
  const temp = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="colorInput">
      <label htmlFor="color1"> Select the color : </label>
      <input type="color" name="color1" id="color1" onChange={temp} />
      <span id="colorValue"></span>
    </div>
  )
}

export default Static