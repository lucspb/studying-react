import {useReducer} from 'react'


const estadoInicial = { contador: 0};

//função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {

    switch(acao.tipo){
        case "incrementar":
            return {contador: estado.contador + 1}
        case "decrementar":
            return {contador: estado.contador - 1}
        case "resetar":
            return {contador: 0}
        default:
            throw new Error("Ação não existente")
    }

}

const Contador = () => {

    // inicializar o useReducer
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({tipo: "incrementar"})}>Incrementar</button>
        <br/>
        <button onClick={() => dispatch({tipo: "decrementar"})}>decrementar</button>
        <br/>
        <button onClick={() => dispatch({tipo: "resetar"})}>reset</button>
    </div>
  )
}

export default Contador