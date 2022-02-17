import './App.css';
import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo'
import Ronaldo, { Component1, Component2 } from './components/Multi'

function App () {
  return (
    <div>
      <Primeiro />
      <Segundo />
      <Ronaldo/>
      <Component1/>
      <Component2/>
    </div>
  )
}

export default App;