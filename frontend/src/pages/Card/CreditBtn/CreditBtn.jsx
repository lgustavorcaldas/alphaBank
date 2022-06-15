import './CreditBtn.css';
import Icon from '../Icon/Icon'
import invoice from '../../../images/invoice.png'
import lock from '../../../images/lock.png';
import historic from '../../../images/historic.png'

const CreditBtn = () => {
  return (
    <div className='box-nav-credit'>
        <Icon icon ={lock} contents = {"Bloquear Cartão" }/>
        <Icon icon ={historic} contents = {"Histórico de Compras" }/>
        <Icon icon ={invoice} contents = {"Fatura" }/>
    </div>
  )
}

export default CreditBtn