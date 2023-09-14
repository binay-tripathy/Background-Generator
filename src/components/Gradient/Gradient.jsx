import React from 'react'
import './Gradient.scss'

const Gradient = () => {
  const color1 = (e) => {
    let color2 = document.querySelector('#color2');
    console.log(color2.value);
    document.getElementById('backgradient').style.backgroundImage = 'linear-gradient(to right, #525733, #57C300)';
  }
  const color2 = (e) => {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="colorInputg">
        <div className="color1">
          <label htmlFor="color1"> Select the first color : </label>
          <input type="color" name="color1" id="color1" onChange={color1} />
          <span id="colorValue1"></span>
        </div>
        <div className="color2">
          <label htmlFor="color2"> Select the second color : </label>
          <input type="color" name="color2" id="color2" onChange={color2} />
          <span id="colorValue2"></span>
        </div>
      </div>
      <div id='backgradient'>
      </div>
    </>

  )
}

export default Gradient