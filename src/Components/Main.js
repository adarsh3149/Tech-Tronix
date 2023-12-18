import React from 'react'
import svg from './logo-01.svg'
import left from './left-01.svg'
import right from './right-01.svg'
import up from './up-01.svg'
import down from './down-01.svg'
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className="main">
      <img className='hero-svg' src={svg} alt=""/>
      <div className="left">
        <img className='left-svg' src={left} alt=""  />
      </div>
      <div className="mid-con">
        <div className='hero-text'>
          <div >
            <img className='up-svg' src={up} alt=""  />
          </div>
          <div>
            <img className='down-svg' src={down} alt="" />
          </div>
          <div className="button">
            <div className="register-btn">register</div>
            <div className="register-btn-out">learn more</div>

          </div>
        </div>
      </div>
      <div className="right">
        <img className='right-svg' src={right} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Main