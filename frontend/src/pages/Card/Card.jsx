import './Card.css';
import CardLimit from './CardLimit/CardLimit';
import Header from './Header/Header';
import CreditCard from './CreditCard/CreditCard';
import CreditBtn from './CreditBtn/CreditBtn';

const Card = () => {
  return (
    <>
     <div className='root-card'>
   <Header/>
   <CardLimit/>
   <CreditCard/>
   <CreditBtn/>
   </div>
    
    </>
  )
}

export default Card