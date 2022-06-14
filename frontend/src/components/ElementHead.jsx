import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import user from "../images/user.png"

const Header = styled.div`
    width: 816px;
    height:150px;
    display: flex;   
    justify-content: space-between;
    
`
//precisa importar a fonte correta
const Saudacao = styled.p`
    font-size: 20px;
    font-family:Arial;
    margin:0;
    padding:0
`

const Nome = styled.span`
    font-size: 24px;
    font-family:Arial;
    font-weight:600;
`
//precisa estilizar o botao 

const Texto = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center
`
const Logo = styled.figure`
padding:30px
`
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
                    <img src={logo} alt="logo" />
                </Logo>
                <Logo>
                <img src={user} alt="user" />
                </Logo>
            </Header>
       
    )
    
}

export default ElementHead


