import React from 'react'

const Gradient = () => {
  const color1 = (e) => {
    console.log(e.target.value);
  }
  const color2 = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="colorInput">
      <label htmlFor="color1"> Select the first color : </label>
      <input type="color" name="color1" id="color1" onChange={color1} />
      <span id="colorValue1"></span>
      <label htmlFor="color2"> Select the second color : </label>
      <input type="color" name="color2" id="color2" onChange={color2}/>
      <span id="colorValue2"></span>
    </div>

  )
}

export default Gradient