import Logo from '../imgs/Logo.jpg'
import brasao from '../imgs/brasao.png'
import './logo.css'

export default _ => (
    <div id='logo-div'>
        <img id='logo' src={Logo} alt='logotipo do Sindifisco Nacional' />
        <img id='brasao' src={brasao} alt="pin" />
    </div>
)