import React from 'react'
import './CardLimit.css';
//import { useState } from 'react'
import eyesOpen from '../../../images/eyer.png'

const CardLimit = () => {
  const eyes = true
  const limitTotal = 99999999999
  const limitUsed = 0


  //const [widthUsed, setwidthUsed ] = useState(`{ }`);
  const widthUsed = {
    width : `${(1 - limitUsed/limitTotal)*100}vw` 
  }
  const widthAvailable = {
    width : `${(limitUsed/limitTotal)*100}vw` 
  }
  
  return (
    <div className='box-card-limit'>
      <div className='limit-eyes'>
      <h2 className='h-limit'>Limite do cartão.</h2>
      {/* {(eyes === true)?<img className='img-eyes' src={eyesOpen} alt="Olhos abertos" />: <img className='img-eyes' src={eyesOpen} alt="Olhos fechados" />} */}
      </div>

      <div className='limit-eyes'>
        <p className='p-limit'>Debito</p>
        {/* <p className='p-limit'> Disponível</p> */}
      </div>

      {/* <div className='limit-eyes' >
        <h2 className='h-limit'>R$ {(limitUsed).toFixed(2)}</h2>
        <h2 className='h-limit'>R$ {(limitTotal - limitUsed).toFixed(2)}</h2>
      </div>

      <div className='used-available'>
          <div className='used' style={widthUsed}></div>
          <div className='available' style={widthAvailable}></div>
      </div> */}
     
    </div>
  )
}

export default CardLimit