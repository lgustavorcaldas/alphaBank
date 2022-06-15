import React from "react";
import foto from "../../images/eyer.png"
import Caixa from "./style/Caixa";
import Botao from "./style/Botao";
import Eyer from "./style/Eyer";
import Saldo from "./style/Saldo";
import Topo from "./style/Topo";
import Valor from "./style/Valor";

function SaldoExtrato(props){
    return(
        <>
        <Caixa>
            <Topo>
                <Saldo>
                    Saldo
                </Saldo>
                <figure>
                    <Eyer src={foto} alt="eyer" />
                </figure>
            </Topo>

            <Valor>R${props.valor}</Valor>

            <Botao>Ver Extrato</Botao>
        </Caixa>
    </>
    )
}

export default SaldoExtrato


