

import './App.css'
import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai'
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/Button';
import PaiFunction from './components/PaiFunction';


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

      {/* 6.6 - useState => hook */}
      <Counter/>

      {/* 6.7 - multiplos estados */}
      <UserInfoForm/>

      {/* 6.8 - eventos */}
      <Button/>

      {/* 6.9 - passando funcoes de manipulacao de eventos como props */}
      <PaiFunction/>

      {/* 7.0 - Eventos de Form */}

    </>
  )
}

export default App
