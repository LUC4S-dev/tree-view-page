import Style from  '../css/Header.module.css'
import Logo from '../assets/logo-credivale.png'

const Header = () =>{

    return(
        <header>
           <div className={Style.header_container}>
             <img src={Logo} width="60%" alt="Logo Sicoob Credivale"/>
            </div>
        </header>

        
    )

}

export default Header;