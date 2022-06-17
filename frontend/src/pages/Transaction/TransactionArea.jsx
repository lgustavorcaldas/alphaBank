import alphaBankLogoMini from "../../images/alphaBankLogoMini.svg";
import userSimbol from "../../images/userSimbol.png";
import { StyledTransaction } from "./style";
import BtnBack from './BtnBack/BtnBack';
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default function TransactionArea() {
  const [ money, setMoney ] = useState(0)

  function fetchInfoBack (){
    const id_user = JSON.parse( localStorage.getItem("token") );
    axios.get('http://localhost:4000/search', { params: { id_user } })
      .then( response => {
        setMoney( response.data.account_balence )
      })
  }
  fetchInfoBack();

  return (
    <StyledTransaction className="transaction">
        <header className="transactionTop">
            <span>Transferência</span>
            <img className="alpha" src={alphaBankLogoMini} alt="" />
            <img className="user" src={userSimbol} alt="" />
        </header>
        <div className="transactionMid">
          <div className="transactionMidBox">
            <span className="text">Saldo atual em conta</span>
            <span className="money">R$ {money}</span>
          </div>
          <div className="informeOValor">
            <span>Informe o valor</span>
            <input type="number" className="value" placeholder="R$ 00.00"  />
            <div></div>
          </div>
          <div className="inputs">
            <div className="agenCont">
              <div>
                <input type="number" name="" id="agent" placeholder="Agência"/>
                <div className="barrinha age"></div>
              </div>
              <div>
                <input type="number" name="" id="" placeholder="Conta"/>
                <div className="barrinha Conta"></div>
              </div>
            </div>
            <input className="longa textInputs" type="number" name="" id="" placeholder="CPF"/>
            <div className="barrinha longa"></div>
            <input className="longa textInputs" type="text" name="" id="" placeholder="Nome Completo"/>
            <div className="barrinha longa"></div>
          </div>
        </div>
        <div className="envi">
          <input className="sendEnv" type="button" value="Enviar" />
        </div>
      <Link to="/">
        <BtnBack/>
      </Link>
    </StyledTransaction>
  )
}
