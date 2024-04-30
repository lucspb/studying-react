
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import ComponentFilho from './components/ComponentFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorContexto from './components/ValorContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContadorCallback from './components/ContadorCallback'
import Exercises from './components/Exercises'

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

      {/* 8.5 - slots e children props*/}
      <Container>
        <h1>Titulo da sessão</h1>
        <p> subtitulo</p>
      </Container>

      {/* 8.6 - sincronizar o estado com props*/}
      {/* prop => componente => chamada de API => resulta em um dado*/}
      <PerfilDeUsuario usuarioId={1}/>
      <PerfilDeUsuario usuarioId={5}/>

      {/* 8.7 - useMemo e useCallback*/}
      <CalculoPesado numero={4}/>
      <ContadorCallback />

      {/* 8.8 - exercicios*/}
      <Exercises />
    </>
  )
}

export default App
