import './Card.css';
import CardLimit from './CardLimit/CardLimit';
import Header from './Header/Header';
import CreditCard from './CreditCard/CreditCard';
import CreditBtn from './CreditBtn/CreditBtn';
import BtnBack from './BtnBack/BtnBack';
import { Link } from "react-router-dom";

import { useState } from "react";
import axios from 'axios';

const Card = () => {
  const [ nameTop, setNameTop ] = useState('Jorge');

  function fetchInfoBack (){
    const id_user = JSON.parse( localStorage.getItem("token") );
    axios.get('http://localhost:4000/search', {
      params: {
        id_user 
      }
    })
      .then( response => {
          setNameTop( response.data.name )
      })
  }
  fetchInfoBack();

  return (
    <div className='root-card'>
      <Header name={nameTop} />
      <CardLimit/>
      <CreditCard/>
      <CreditBtn/>
      <Link to="/">
        <BtnBack/>
      </Link>
    </div>
  )
}

export default Card