import React from "react";
import ElementHead from "../ElementHead/ElementHead";
import SaldoExtrato from "../SaldoExtrato/SaldoExtrato";
import Btn from "../Btn/Btn";
import Banner from "../../images/emprestimo.png"
import Caixa from "./style/Caixa";
import Imagem from "./style/Imagem";

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