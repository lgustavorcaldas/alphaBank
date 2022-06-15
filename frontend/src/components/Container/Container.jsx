import React from "react";
import ElementHead from "../ElementHead/ElementHead";
import SaldoExtrato from "../SaldoExtrato/SaldoExtrato";
import Btn from "../Btn/Btn";
import Banner from "../../images/emprestimo.png"
import Caixa from "./style/Caixa";
import Imagem from "./style/Imagem";
import axios from "axios"
import { useState } from "react";

function Container () {
    const [ name, setName ] = useState('Jorge');
    const [ saldo, setSaldo ] = useState(1515.54)

    function test (){
        const id_user = JSON.parse( localStorage.getItem("token") );
        axios.get('http://localhost:4000/search', {
            params: {
                id_user 
            }
        })
            .then( response => {
                setName( response.data.name )
                setSaldo( response.data.account_balence )
            })
    }

    test()

    return (
        <Caixa>
            <ElementHead NomeCliente={name}/>
            <SaldoExtrato valor={saldo}/>
            <Imagem src= {Banner} />
            <Btn />
        </Caixa>
    )
}
export default Container