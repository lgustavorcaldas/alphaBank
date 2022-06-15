import './CreditCard.css';
import logo from '../../images/logoCard.png';
import flag from '../../images/flag.png'

const creditCard = () => {
    const name = "GABRIELA L O MOREIRA";
    const numCard = "1111222233334444"
    let numCredit = ""
    const DueDate = "12/28"
    const codCv = "123"

    for (let i = 0; i < 16; i = i + 4) {
        numCredit += numCard.substr(i, 4) + " "
    }

    return (
        <div className='box-credit-card'>
            <div className='black-belt'></div>
            <div className='box-card'>
                <div className='data-card'>
                    <p className='credit'>{name}</p>
                    <p className='credit'>{numCredit}</p>
                    <span className='val-cv'><p>VAL THRU</p> <p>CV</p></span>
                    <span className='due-date-cv'> <p>{DueDate}</p> <p>{codCv}</p></span>
                </div>

                <div className='logo-flag'>
                    <img className='credit-logo' src={logo} alt="Logo do Alpha Bank" />
                    <img className='img-flag' src={flag} alt="bandeira do cartão de credito" />

                </div>
            </div>
        </div>
    )
}

export default creditCard