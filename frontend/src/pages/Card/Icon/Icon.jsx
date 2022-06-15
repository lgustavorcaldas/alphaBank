import './Icon.css';
const Icon = ({ icon, contents }) => {

  return (
    <div className='box-icon-nav'>
      <img className='img-icon' src={icon} alt="" />
      <p className='p-icon'>{contents}</p>
    </div>
  )
}

export default Icon