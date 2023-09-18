import React, { useEffect, useState } from 'react'
import './Static.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Static = () => {
  const [s, setS] = useState('#DA8A49');
  const color = (e) => {
    setS(e.target.value);
  }
  useEffect(() => {
    document.getElementById('backsolid').style.background = s;
  }, [s])
  return (
    <>
      <div className="colorInputs">
        <label htmlFor="color"> Select the color : </label>
        <input type="color" name="color" id="color" defaultValue={s} onChange={color} />
        <span id="colorValue"></span>
      </div>
      <div id='backsolid'>
        <Popup className='popUp' trigger={<button className="text"> <h6>Get the Code !!</h6> <FontAwesomeIcon icon={faCode} beat size="xs" id='faicon' /></button>} modal>
          {close => (
            <div className="moda">
              <button className="close" onClick={close}> &times; </button>
              <div className="content">
                CSS &nbsp;<FontAwesomeIcon size="xs" icon={faArrowRight} /> &nbsp;&nbsp;&nbsp;  background-color : {s}
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

export default Static