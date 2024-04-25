import {useState} from 'react'

const Counter = () => {
    //[consultar, alterar]
    const [count, setCount] = useState(0);

    //variaveis nao re-renderizam o component
    // let x = 0;
    // console.log(x)

  return (
    <div>
        <p>você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  )
}

export default Counter