import React from 'react'
import './CardLimit.css';
//import { useState } from 'react'
import eyesOpen from '../../images/eyer.png'

const CardLimit = () => {
  const eyes = true
  const limitTotal = 2500.00
  const limitUsed = 1375.00


  //const [widthUsed, setwidthUsed ] = useState(`{ }`);
  const widthUsed = {
    width: `${(1 - limitUsed / limitTotal) * 100}vw`
  }
  const widthAvailable = {
    width: `${(limitUsed / limitTotal) * 100}vw`
  }

  return (
    <div className='box-card-limit'>
      <div className='limit-eyes'>
        <h2>Limite do cartão.</h2>
        {(eyes === true) ? <img src={eyesOpen} alt="Olhos abertos" /> : <img src={eyesOpen} alt="Olhos fechados" />}
      </div>


      <div className='limit-eyes'>
        <p className='p-card'>Utilizado</p>
        <p className='p-card'> Disponível</p>
      </div>

      <div className='limit-eyes' >
        <h2>R$ {(limitUsed).toFixed(2)}</h2>
        <h2>R$ {(limitTotal - limitUsed).toFixed(2)}</h2>
      </div>


      <div className='used-available'>
        <div className='used' style={widthUsed}></div>
        <div className='available' style={widthAvailable}></div>
      </div>

    </div>
  )
}

export default CardLimit