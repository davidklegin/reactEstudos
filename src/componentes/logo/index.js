import logo from '../../img/logo.svg';
import './estilo.css'

function Logo() {
    return (
    <div className='logo'>
        <img 
        src={logo} 
        alt="logo-img"
        className='imagem-logo'
        ></img>
        <p><strong>Alura</strong>books</p>
    </div>
    );
}

export default Logo;