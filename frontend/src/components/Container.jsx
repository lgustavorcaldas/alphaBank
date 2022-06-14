import React from "react";
import styled from "styled-components"
import ElementHead from "./ElementHead";
import SaldoExtrato from "./SaldoExtrato";
import Btn from "./Btn";
import Banner from "../images/emprestimo.png"
const Caixa = styled.div`
    width = 816px;
    background-color:#f5f2f0;
    display: flex;
    flex-direction: column;
    align-items: center;
` 
const Imagem = styled.img`
    width: 816px ;
    height: 246px;  

`
function Container () {
    return (
        <Caixa>
            <ElementHead NomeCliente="Luiz Lindo Caldas"/>
            <SaldoExtrato valor="1500,00"/>
            <Imagem src= {Banner} />
            <Btn />
        </Caixa>
    )
}
export default Container