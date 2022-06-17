import React from "react";
import { Link } from "react-router-dom";

import deposito2 from "../../images/deposito2.png"
import pix2 from "../../images/pix2.png"
import transf2 from "../../images/transf2.png"
import card2 from "../../images/card2.png"

import  Caixa from "./style/Caixa"
import  DivBtn from "./style/DivBtn"
import  Item from "./style/Item"
import  Texto from "./style/Texto"

function Btn() {
    return(
        <>
            <Caixa>  
                <a href="">
                    <Link to="/transactionArea">
                        <DivBtn>
                            <Item src={deposito2} alt="deposito" />
                            <Texto>Depositar</Texto>
                        </DivBtn>
                    </Link>
                </a>
                <a href="">
                    <Link to="/transactionArea">
                        <DivBtn>
                            <Item src={transf2} alt="transferir" />
                            <Texto>Transferir</Texto>
                        </DivBtn>
                    </Link>
                </a>
                <a href="">
                    <Link to="/transactionArea">
                        <DivBtn>
                            <Item src={pix2} alt="pix" />
                            <Texto>Pix</Texto>
                        </DivBtn>
                    </Link>
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