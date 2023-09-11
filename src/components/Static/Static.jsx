import React from 'react'

const Static = () => {
  const temp = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="colorInput">
      <input type="color" name="color1" id="color1" onChange={temp} />
      <span id="colorValue"></span>
    </div>
  )
}

export default Static