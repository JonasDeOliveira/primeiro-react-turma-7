import './App.css'
import Contador from './components/Contador'

function App () {
  return (
    <div>
      <Contador inicial={100} passo={10} limite={1000}/>
      <Contador inicial={0} passo={5}/>
      
    </div>
  )
}

export default App;