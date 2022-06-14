import React from "react";
import styled from "styled-components"
import eyer from "../images/eyer.png"

const Topo = styled.div`
    display:flex;
    width:816px;
    justify-content: space-between;
`
const Caixa = styled.section`
    background-color:#f5f2f0;
    margin-bottom:10px;
    border-radius:8px; 
    border: solid black 1px;
`
//border-radius:8px; 
//border: solid black 1px;
const Saldo = styled.p`
    font-size:30px;
    font-weight:300;
    margin-left: 10px;
`
const Botao = styled.button`
width:816px;
height:40px;
background-color: #575761;
color: #FFBF46;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
cursor: pointer;
`
const Valor = styled.p`
    font-size:32px;
    font-weight:700;
    margin:0;
    padding:0;
    margin-left: 10px;
`
const Eyer = styled.img`
margin-right: 10px;
margin-top: 10px;
`

function SaldoExtrato(props){
    return(
        <>
        <Caixa>
            <Topo>
                <Saldo>
                    Saldo
                </Saldo>
                <figure>
                    <Eyer src={eyer} alt="eyer" />
                </figure>
            </Topo>

            <Valor>R${props.valor}</Valor>

            <Botao>Ver Extrato</Botao>
        </Caixa>
    </>
    )
}

export default SaldoExtrato


