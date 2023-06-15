import './App.css'
import Tree from 'react-animated-tree'
import Header from './components/Header'
import Logo from './assets/logo_triangulo.png'

function App() {

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



    <>
      <Header />

      <div className='container'>
        <div>
          <section className='tree_container'>
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
          <section className='tree_container'>
            <Tree content={<span className='title'>Agências</span>} style={treeStyles} >

              <Tree content="AG 01 - AG 07">

                <Tree content="AG 01 Venceslau">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 02 Rancharia">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 03 Bataguassu">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 04 Nova Andradina">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 05 Centro">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 06 Naviraí">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 07 Três Lagoas">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>
              </Tree>

              <Tree content="AG 08 - AG 14">
                <Tree content="AG 08 Cel Marcondes">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 09 Regente Feijó">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 10 Alvares Machado">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 11 Presidente Epitácio">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 12 Rio Preto">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 13 Araçatuba">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>

                <Tree content="AG 14 Andradina">

                  <Tree content="Telefones">
                    <Tree content="(18) ****" />
                  </Tree>

                  <Tree content="Impressoras">
                    <Tree content="192.168" />
                  </Tree>

                  <Tree content={<a href='#'><span>Voucher Sophos</span></a>} />

                </Tree>
              </Tree>


            </Tree>
          </section>
        </div>
      </div>


    </>
  )
}

export default App
