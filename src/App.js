import './App.css'
// import Primeiro from './components/Primeiro'
// import Segundo from './components/Segundo'
// import Ronaldo, { Component1, Component2 } from './components/Multi'
import Estilos from './components/estilos/Estilos'
import MinMax from './components/MinMax'
import TesteBotao from './components/testebotao/botao'
import Titulo from './components/Titulo'
import Botao from './components/Botao'

function App () {
  return (
    <div>
      {/* <Primeiro />
      <Segundo />
      <Ronaldo/>
      <Component1/>
      <Component2/> */}
      <Estilos/>
      <MinMax min="5" max="10"/>
      <MinMax min={10} max={20}/>
      <TesteBotao label="Comprar" backColor="red"/>
      <TesteBotao label="Adicionar ao carrinho" backColor="green"/>
      <TesteBotao label="Finalizar compra" backColor="blue"/>
      <Titulo principal="olá" secundario="tudo bem"/>
      <Botao/>
      
    </div>
  )
}

export default App;