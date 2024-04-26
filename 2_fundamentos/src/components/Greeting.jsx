import { useState } from "react"

const Greeting = ({name}) => {
    const [count, setCount] = useState(0)
    
  return (
    <div>
        <h1>Olá {name}, seja bem-vindo!</h1>

        <button onClick={() => setCount(count + 1)}>Clique aqui para aumentar o contador abaixo</button>
        <p>{count}</p>
    </div>

    
  )
}

export default Greeting