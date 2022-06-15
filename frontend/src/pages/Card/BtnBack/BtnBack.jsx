import './BtnBack.css';
import btnBack from '../../images/btnBack.png'

const BtnBack = () => {
  return (
    <div className='box-back'>
        <img className='btn-back' src={btnBack} alt="botão de voltar" />
    </div>
  )
}

export default BtnBack