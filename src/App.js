import './App.css'
// import Familia from './components/children/Familia'
// import Membro from './components/children/Membro'
// import ParImpar from './components/condicional/ParImpar'
// import UsuarioLogado from './components/condicional/UsuarioLogado'
// import ListaProdutos from './components/Lista/ListaProdutos'
// import DigiteSeuNome from './components/DigiteSeuNome'
import CadastroNome from './components/classe/CadastroNome'

function App () {
  return (
    <div>
      <CadastroNome nome="Ronaldo"/>
      {/* <DigiteSeuNome/> */}
      {/* <ListaProdutos/> */}


      {/* <UsuarioLogado usuario={{nome: 'Ronaldo', email: 'ronaldo@gmail.com'}}/>
      <UsuarioLogado usuario={{nome: 'Zina'}}/>
      <UsuarioLogado usuario={{email: 'teste@gmail.com'}}/>
      <UsuarioLogado usuario={null}/>
      <UsuarioLogado usuario={{}}/>
    */}
      {/* <ParImpar num={2}/>
      <ParImpar num={3}/>
      <ParImpar /> */}

      {/* <Familia>
        <Membro nome="Jonas" sobrenome="Oliveira"/>
        <Membro nome="Ronaldo" sobrenome="Oliveira"/>
        <Membro nome="Zina" sobrenome="Oliveira"/>
      </Familia>

      <Familia>
        <Membro nome="William" sobrenome="Barbosa"/>
        <Membro nome="Leo" sobrenome="Barbosa"/>
        <Membro nome="Douglas" sobrenome="Barbosa"/>
      </Familia> */}
    </div>
  )
}

export default App;