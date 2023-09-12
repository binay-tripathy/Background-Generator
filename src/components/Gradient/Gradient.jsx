import React from 'react'

const Gradient = () => {
  const temp1 = (e) => {
    console.log(e.target.value);
  }
  const temp2 = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="colorInput">
      <input type="color" name="color1" id="color1" onChange={temp1} />
      <span id="colorValue1"></span>
      <input type="color" name="color2" id="color2" onChange={temp2}/>
      <span id="colorValue2"></span>
    </div>

  )
}

export default Gradient