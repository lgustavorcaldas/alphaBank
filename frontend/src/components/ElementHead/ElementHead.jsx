import React from "react"
import foto1 from "../../images/logo.png"
import foto2 from "../../images/user.png"

import Header from "./style/Header"
import Saudacao from "./style/Saudacao"
import Nome from "./style/Nome"
import Texto from "./style/Texto"
import User from "./style/User"
import Logo from "./style/Logo"

function ElementHead(props){

    return(
       
            <Header>
                <Texto>
                    <Saudacao>
                          Olá Bom Dia!
                    </Saudacao>
                    <Nome className="cliente">
                    {props.NomeCliente}
                    </Nome>
                </Texto>
                <Logo>
                    <img src={foto1} alt="logo" />
                </Logo>
                <User>
                <img src={foto2} alt="user" />
                </User>
            </Header>
       
    )
    
}

export default ElementHead