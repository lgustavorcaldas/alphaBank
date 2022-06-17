import alphaBankLogoMini from "../../images/alphaBankLogoMini.svg";
import userSimbol from "../../images/userSimbol.png";
import { StyledTransaction } from "./style";
import BtnBack from './BtnBack/BtnBack';
import { useState } from "react";
import axios from "axios"
import { Link, useHistory } from "react-router-dom";

export default function TransactionArea() {
  const history = useHistory('')
  const [ account_num_sender, setAccount_num_sender] = useState();
  const [ money, setMoney ] = useState()
  const [ value_send, setValue_send ] = useState()
  const [ agenc, setAgenc ] = useState()
  const [ account_num_reciver, setAccount_num_reciver ] = useState()
  const [ cpf, setCpf ] = useState()
  const [ name, setName ] = useState()

  function fetchInfoBack (){
    const id_user = JSON.parse( localStorage.getItem("token") );
    axios.get('http://localhost:4000/search', { params: { id_user } })
      .then( response => {
        setMoney( response.data.account_balence )
        setAccount_num_sender( response.data.account_num )
      })
  }
  fetchInfoBack();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionBabe = {
      account_num_sender: account_num_sender,
      account_num_reciver: account_num_reciver,
      value_send: value_send
    };

    await axios.put('http://localhost:4000/transation', transactionBabe)
      .then( response => console.log(response) )
    history.push("/");
  };



  return (
    <StyledTransaction className="transaction">
        <header className="transactionTop">
            <span>Transferência</span>
            <img className="alpha" src={alphaBankLogoMini} alt="" />
            <img className="user" src={userSimbol} alt="" />
        </header>
        <form onSubmit={handleSubmit} className="transferencia">
          <div className="transactionMid">
            <div className="transactionMidBox">
              <span className="text">Saldo atual em conta</span>
              <span className="money">R$ {money}</span>
            </div>
            <div className="informeOValor">
              <span>Informe o valor</span>
              <input type="number" onChange={(e) => setValue_send(e.target.value)} value={value_send} className="value" placeholder="R$ 00.00"  />
              <div></div>
            </div>
            <div className="inputs">
              <div className="agenCont">
                <div>
                  <input type="number" onChange={(e) => setAgenc(e.target.value)} value={agenc} name="" id="agent" placeholder="Agência"/>
                  <div className="barrinha age"></div>
                </div>
                <div>
                  <input type="number" onChange={(e) => setAccount_num_reciver(e.target.value)} value={account_num_reciver} name="" id="" placeholder="Conta"/>
                  <div className="barrinha Conta"></div>
                </div>
              </div>
              <input className="longa textInputs" type="number"  onChange={(e) => setCpf(e.target.value)} value={cpf} name="" id="" placeholder="CPF"/>
              <div className="barrinha longa"></div>
              <input className="longa textInputs" type="text"  onChange={(e) => setName(e.target.value)} value={name} name="" id="" placeholder="Nome Completo"/>
              <div className="barrinha longa"></div>
            </div>
          </div>
          <div className="envi">
            <input className="sendEnv" type="submit" value="Enviar" />
          </div>
        </ form>
      <Link to="/">
        <BtnBack/>
      </Link>
    </StyledTransaction>
  )
}
