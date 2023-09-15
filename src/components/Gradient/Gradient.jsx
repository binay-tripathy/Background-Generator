import React, { useEffect, useState } from 'react'
import './Gradient.scss'

const Gradient = () => {
  const [g1, setG1] = useState('#ffffff');
  const [g2, setG2] = useState('#ffffff');

  useEffect(() => {
    const bgcolor = `linear-gradient(to right, ${g1}, ${g2})`;
    document.getElementById('backgradient').style.background = bgcolor;
    console.log(bgcolor);
  }, [g1, g2])

  const color1 = (e) => {
    setG1(e.target.value);
  }
  const color2 = (e) => {
    setG2(e.target.value);
  }
  return (
    <>
      <div className="colorInputg">
        <div className="color1">
          <label htmlFor="color1"> Select the first color : </label>
          <input type="color" name="color1" defaultValue={g1} id="color1" onChange={color1} />
          <span id="colorValue1"></span>
        </div>
        <div className="color2">
          <label htmlFor="color2"> Select the second color : </label>
          <input type="color" name="color2" defaultValue={g2} id="color2" onChange={color2} />
          <span id="colorValue2"></span>
        </div>
      </div>
      <div id='backgradient'>
      </div>
    </>

  )
}

export default Gradient