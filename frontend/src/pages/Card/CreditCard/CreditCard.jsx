import './CreditCard.css';
import logo from '../../../images/logoCard.png';
import flag from '../../../images/flag.png';

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const CreditCard = () => {
    const [ name, setName ] = useState('GABRIELA L O MOREIRA');
    const [ numCard, setNumCard ] = useState('1111222233334444');
    const [ dueDate, setDueDate ] = useState('12/28');
    const [ codCv, setCodCv ] = useState('123');
    
    let numCredit = '';
    for (let i=0 ;i < 16; i=i+4) {
        numCredit += numCard.substr( i, 4 ) + " ";
    }

    function test (){
        const id_user = JSON.parse( localStorage.getItem("token") );
        axios.get('http://localhost:4000/search', {
            params: {
                id_user 
            }
        })
            .then( response => {
                setName( response.data.name )
                setNumCard( response.data.card_num )
                setDueDate( response.data.due_date )
                setCodCv( response.data.security_code )
            })
    }
    test();

  return (
    <div className='box-credit-card'>
        <div className='black-belt'></div>
        <div className='box-card'>
            <div className='data-card'>
                <p className='credit'>{name}</p>
                <p className='credit'>{numCredit}</p>
                <span className='val-cv'><p>VAL THRU</p> <p>CV</p></span>
                <span className='due-date-cv'> <p>{dueDate}</p> <p>{codCv}</p></span>
            </div>
    
            <div className='logo-flag'>
                <img className='credit-logo' src={logo} alt="Logo do Alpha Bank" />
                <img className='img-flag' src= {flag} alt="bandeira do cartão de credito" />

            </div>
        </div>
    </div>
  )
}

export default CreditCard