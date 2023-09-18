import React, { useEffect, useState } from 'react'
import './Gradient.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Gradient = () => {
  const [g1, setG1] = useState('#DA8A49');
  const [g2, setG2] = useState('#8A8CCC');
  const [bgText, setBgText] = useState('linear-gradient(to right, #DA8A49, #8A8CCC)');

  useEffect(() => {
    // const bgcolor = `linear-gradient(to right, ${g1}, ${g2})`;
    setBgText(`linear-gradient(to right, ${g1}, ${g2})`)
    document.getElementById('backgradient').style.background = bgText;
  }, [bgText, g1, g2])

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
        <Popup className='popUp' trigger={<button className="text"> <h6>Get the Code !!</h6> <FontAwesomeIcon icon={faCode} beat size="xs" id='faicon' /></button>} modal>
          {close => (
            <div className="moda">
              <button className="close" onClick={close}> &times; </button>
              <div className="content">
              CSS &nbsp;<FontAwesomeIcon size="xs" icon={faArrowRight} /> &nbsp;&nbsp;&nbsp; background-color : {bgText}
              </div>
              <div className="actions">
                <button className="button" onClick={() => { close(); }}> CLOSE </button>
              </div>
            </div>
          )}
        </Popup>

      </div>
    </>

  )
}

export default Gradient