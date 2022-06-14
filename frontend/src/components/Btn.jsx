import React from "react";
import styled from "styled-components"
import deposito2 from "../images/deposito2.png"
import pix2 from "../images/pix2.png"
import transf2 from "../images/transf2.png"
import card2 from "../images/card2.png"

const Caixa = styled.section`
width:816px;
display: flex;
justify-content: space-between;
`
const DivBtn = styled.div`
width:100px;
height:100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#ffffff;
color:#575761;
margin-top: 15px;
border-radius:8px;
border: solid 1px #575761;

`
const Item = styled.img`
width: 45px;
height: 45px;
`
const Texto = styled.span`
font-size:14px;
`
function Btn() {
    return(
        <>
            <Caixa>  
                <a href="">
                <DivBtn>
                    <Item src={deposito2} alt="deposito" />
                    <Texto>Depositar</Texto>
                </DivBtn>
                </a>
                <a href="">
                <DivBtn>
                    <Item src={transf2} alt="transferir" />
                    <Texto>Transferir</Texto>
                </DivBtn>
                </a>
                <a href="">
                <DivBtn>
                    <Item src={pix2} alt="pix" />
                    <Texto>Pix</Texto>
                </DivBtn>
                </a>
                <a href="">
                <DivBtn>
                    <Item src={card2} alt="cartao" />
                    <Texto>Cartão</Texto>
                </DivBtn>
                </a>
            </Caixa>
        </>
    )
    
}

export default Btn