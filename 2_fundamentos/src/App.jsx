

import './App.css'
import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai'
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';


function App() {
 

  return (
    <>
      {/* 6.1 - criacao de components*/}
      <Welcome />
      
      {/* 6.2 - expressoes dinamicas */}
      <BomDia />

      {/* 6.3 - components dentro de components */}
      <Pai />

      {/* 6.4 - Props */}
      <Descricao idade={30} nome="Lucas" telefone="83 999922234"/>

      {/* 6.5 - Desestruturação de Props */}
      <Cachorro nome="Dumbo" raca="pinschie"/>
    </>
  )
}

export default App
