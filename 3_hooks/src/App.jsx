
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponentFilho from './components/ComponentFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorContexto from './components/ValorContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'

function App() {
  

  return (
    <>
      {/* 8.1 - useEffect*/}
      <ExemploUseEffect/>

      <Timer/>

      {/* 8.2 - useContext*/}
      {/* transferir o estado entre components*/}
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorContexto />
      </MeuContextoProvider>

      {/* 8.3 - useducer*/}
      {/* estados mais complexos */}
      <Contador/>
      
      {/* 8.4 - Custom hook*/}
      <DisplayWindowSize/> 

    </>
  )
}

export default App
