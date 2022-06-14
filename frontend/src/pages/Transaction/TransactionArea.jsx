import alphaBankLogoMini from "../../images/alphaBankLogoMini.svg"
import userSimbol from "../../images/userSimbol.png"

export default function TransactionArea() {
  return (
    <section className="transaction">
        <header className="transactionTop">
            <span>Transferência</span>
            <img src={alphaBankLogoMini} alt="" />
            <img src={userSimbol} alt="" />
        </header>
        <div className="transactionMid">
          <div className="transactionMidBox">
            <span>Saldo atual em conta</span>
            <span>R$ 375.00</span>
          </div>
          <div>
            <span>Informe o valor</span>
            <input type="text" name="value" id="" placeholder="R$ 00,00"/>
          </div>
          <div>
            <div>
              <input type="text" name="" id="" placeholder="Agência"/>
              <input type="text" name="" id="" placeholder="Conta"/>
            </div>
            <input type="text" name="" id="" pattern="CPF"/>
            <input type="text" name="" id="" pattern="Nome Completo"/>
          </div>
        </div>
        <div>
          <input type="button" value="Enviar" />
        </div>
    </section>
  )
}
