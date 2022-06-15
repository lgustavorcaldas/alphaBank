import './Header.css';
import logo from '../../../images/logo.png';
import iconProfile from '../../../images/user.png';


const Header = () => {
    const name = "Paulo Bonzão"
  return (
    <div className='box-profile'>
        <div>
            <p className='p-hello'>Olá! Bem-Vindo,</p>
            <h1 className='h-name'>{name}</h1>
        </div>
        <img className='img-logo' src= {logo} alt="logo do Alpha Bank" />
        <img className='img-user' src={iconProfile} alt=" icone profile" />
    </div>
  )
}

export default Header