import './Card.css';
import CardLimit from './CardLimit/CardLimit';
import Header from './Header/Header';
import CreditCard from './CreditCard/CreditCard';
import CreditBtn from './CreditBtn/CreditBtn';
import BtnBack from './BtnBack/BtnBack';

const Card = () => {
  return (
    <>
     <div className='root-card'>
   <Header/>
   <CardLimit/>
   <CreditCard/>
   <CreditBtn/>
   <BtnBack/>
   </div>
    
    </>
  )
}

export default Card