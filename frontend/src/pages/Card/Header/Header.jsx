import './Header.css';
import logo from '../../images/logo.png';
import iconProfile from '../../images/user.png';


const Header = () => {
  const name = "Paulo Bonzão"
  return (
    <div className='box-profile'>
      <div>
        <p className='p-card'>Olá! Bem-Vindo,</p>
        <h1>{name}</h1>
      </div>
      <img src={logo} alt="logo do Alpha Bank" />
      <img src={iconProfile} alt=" icone profile" />
    </div>
  )
}

export default Header