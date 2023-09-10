import React from 'react'
import './Header.scss'


const Header = () => {
  const temp = (e) => {
    console.log(e.target.value);
  }
  return (
    <header className="header">
        <h1>Background Generator</h1>
        <div className="subHead">
            <div className="colorInput">
                <input type="color" name="color1" id="color1" onChange={temp}/>
                <span id="colorValue1"></span>
                <input type="color" name="color2" id="color2"/>
                <span id="colorValue2"></span>
            </div>
        </div>
    </header>
  )
}

export default Header