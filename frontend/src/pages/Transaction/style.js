import styled from "styled-components"

export const StyledTransaction = styled.section`
.transactionTop{
    margin-top: 50px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.transactionTop span{
    font-size: 20px;
    font-weight: 500;
    color: #648381;
}
.alpha{
    position:relative;
    right: 50px;
}
.transactionMid{
    width: 600px;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.transactionMidBox{
    margin-top: 30px;
    background-color: white;
    width: 600px;
    height: 46px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
}
.text{
    font-size: 20px;
    font-weight: 500;
    color: #648381;
}
.money{
    font-size: 20px;
    font-weight: 700;
    color: #575761;
}
.informeOValor{
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 92px;
}
.informeOValor span{
    font-weight: 500;
    font-size: 24px;
    color: #648381;
}
.value{
    font-weight: 500;
    font-size: 32px;
    color: #FFBF46;
    background-color: transparent;
    text-align: center;

}
.value::placeholder{
    color: #FFBF46;
}
.informeOValor div{
    width: 300px;
    border: 1px solid #648381;
}
.inputs{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: 151px;
}
.inputs input{
    margin-top: 50px;
    font-weight: 400;
    font-size: 24px;
    color: #648381;
    background-color: transparent;
}
.agenCont{
    width: 600px;
    display: flex;
    align-items: center;
}
.barrinha{
    width: 300px;
    border: 1px solid #648381;
}
.age{
    width: 300px;
}
.Conta{
    width: 300px;
}
.longa{
    width: 600px;
}
.textInputs{
    margin-top: 30px;
}
.envi{
    margin-top: 50px;
    width: 600px;
    display: flex;
    justify-content: center;
}
.sendEnv{
    width: 420px;
    height: 50px;
    background: #FFBF46;
    box-shadow: 0px 4px 4px rgba(100, 131, 129, 0.5);
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    transition: transform .5s;
}
.sendEnv:hover{
    transform: scale(1.05);
    cursor: pointer;
}
`