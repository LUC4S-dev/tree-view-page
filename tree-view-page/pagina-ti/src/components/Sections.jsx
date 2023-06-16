import Header from "./Header"
import Tree from 'react-animated-tree'
import Style from '../css/Sections.module.css'
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)


const Sections = () => {

    const [theme, setTheme] = useState("ligth");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "ligth" ? "dark" : "ligth"));
    }

    const typeStyles = {
        // fontSize: '2em',
        verticalAlign: 'middle',
    }

    const treeStyles = {
        position: 'relative',
        // top: 40,
        left: 40,
        color: 'black',
        fill: 'black',
        // width: '100%'
    }




    return (


        <ThemeContext.Provider value={{ theme, setTheme }}>

            <div>
                <Header />
                <div className={Style.container}>
                    <div>
                        <section className={Style.tree_container}>
                            <Tree content={<span className='title'>Matriz</span>} style={treeStyles} >

                                <Tree content={<span>Acessos TI</span>}>
                                    <Tree content={<a href='https://login.sophos.com/login.sophos.com/oauth2/v2.0/authorize?p=B2C_1A_signup_signin&client_id=d8ce821f-a1da-4b03-b7e2-1d1a9cc028f3&redirect_uri=https%3A%2F%2Fcentral.sophos.com%2Fmanage%2Flogin%2Fazureb2c&scope=openid&response_type=id_token&prompt=login&state=' target="_blank"><span className='title'>Sophos Admin</span></a>} />
                                    <Tree content={<a href='https://portal.sisbr.coop.br/cas/login' target="_blank"><span>Sicoob Universidade</span></a>} />
                                    <Tree content={<a href='https://plataforma.ubots.com.br/' target="_blank"><span>Ubots</span></a>} />
                                    <Tree content={<a href='https://www.dimepkairos.com.br/Dimep/Account/LogOn?ReturnUrl=%2F' target="_blank"><span>Kairos</span></a>} />
                                    <Tree content={<a href='https://192.168.250.3:5001/#/login' target="_blank"><span>3CX Admin</span></a>} />

                                </Tree>

                                <Tree content={<span>Sites</span>}>
                                    <Tree content={<a href='https://www.kabum.com.br/' target="_blank"><span>Kabum</span></a>} />
                                    <Tree content={<a href='https://www.dell.com/' target="_blank"><span>Dell</span></a>} />
                                    <Tree content={<a href='https://www.perto.com.br/' target="_blank"><span>Perto</span></a>} />
                                    <Tree content={<a href='https://ged.guardiao.digital/#/credivale' target="_blank"><span>Guardião Digital</span></a>} />
                                </Tree>

                            </Tree>
                        </section>
                    </div>

                    <div>
                        <section className={Style.tree_container}>

                            <Tree content={<span className='title'>Agências</span>} style={treeStyles} >

                                <Tree content="AG 01 - AG 07">

                                    <Tree content="AG 01 Venceslau">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-5861" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.101.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 02 Rancharia">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-5862" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.102.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 03 Bataguassu">

                                        <Tree content="Telefones">
                                            <Tree content="(67) 3304-8314" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.102.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 04 Nova Andradina">

                                        <Tree content="Telefones">
                                            <Tree content="(67) 3304-5112" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.104.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 05 Centro">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-5492" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.105.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 06 Naviraí">

                                        <Tree content="Telefones">
                                            <Tree content="(67) 2107-7550" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.106.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 07 Três Lagoas">

                                        <Tree content="Telefones">
                                            <Tree content="(67) 2107-7567" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.107.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                </Tree>

                                <Tree content="AG 08 - AG 14">
                                    <Tree content="AG 08 Cel Marcondes">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-5481" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.108.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 09 Regente Feijó">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-8728" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.109.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 10 Alvares Machado">

                                        <Tree content="Telefones">
                                            <Tree content="(67) 2101-8709" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.110.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 11 Presidente Epitácio">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2101-5463" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.111.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 12 Rio Preto">

                                        <Tree content="Telefones">
                                            <Tree content="(17) 2137-9543" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.112.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 13 Araçatuba">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 3303-3678" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.113.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>

                                    <Tree content="AG 14 Andradina">

                                        <Tree content="Telefones">
                                            <Tree content="(18) 2122-2081" />
                                        </Tree>

                                        <Tree content="Impressoras">
                                            <Tree content="192.168" />
                                        </Tree>

                                        <Tree content={<a href='https://192.168.114.1/userportal/webpages/myaccount/login.jsp' target="_blank"><span>Voucher Sophos</span></a>} />

                                    </Tree>
                                </Tree>


                            </Tree>
                        </section>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>

    );

}

export default Sections;