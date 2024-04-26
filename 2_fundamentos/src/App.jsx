

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
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Greeting from './components/Greeting';
import TaskList from './components/TaskList';


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

      {/* 6.10 - Eventos de Form */}
      <Form/>

      {/* 6.11 - Renderização condicional */}
      <RenderCondicional user="Lucas"/>

      {/* 6.12 - expressao ternaria */}
      <LoginButton user="Lucas" loggedIn={true}/>
      <LoginButton user="Lucas" loggedIn={false}/>

      {/* 6.13 - render nulo */}
      <Warning warning={null}/>
      
      {/* 6.14 - listas chaves */}
      <NumberList numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
      
      {/* 6.15 - estilos por atributo */}
      <BotaoEstilizado/>

      {/* 6.16 - estilos globais */}
      <BotaoAzul/>

      {/* 6.17 - exercicios */}
      <Greeting name="Lucas" />
      <TaskList tasks={["estudar react", "lavar louça", "arrumar a casa", "fazer o jantar"]} />
    </>
  )
}

export default App
