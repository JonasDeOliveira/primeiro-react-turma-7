import './App.css'
import Contador from './components/Contador'
import Pessoa from './components/pessoa/Pessoa'
import Produto from './components/produto/Produto'

function App () {
  return (
    <div>

      <ul>
        <Produto nome="teclado" marca="dell" valor="179,90" azul/>
        <Produto nome="monitor" marca="philips" valor="900,00" verde/>
        <Produto nome="Caneca" marca="QSD" valor="20,00" preto/>
      </ul>


      {/* <Pessoa nome="Jonas" idade="28" sexo="M" estado_civil="casado" />
      <Pessoa nome="Will" idade="18" sexo="M" estado_civil="casado" />
      <Pessoa nome="Wanderson" idade="21" sexo="M" estado_civil="solteiro" /> */}

      {/* <Contador inicial={100} passo={10} limite={1000}/>
      <Contador inicial={0} passo={5}/> */}
    </div>
  )
}

export default App;