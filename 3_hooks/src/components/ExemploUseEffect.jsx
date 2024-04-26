import {useEffect, useState} from 'react'

const ExemploUseEffect = () => {
    //executar algo, baseado em algo
    const[contador, setContador] = useState(0);

 useEffect(() => {
    document.title = `voce clicou ${contador} vezes`
 })

  return (
    <div>
        <p>voce clicou {contador} vezes </p>
        <button onClick={() => setContador(contador + 1)}>clica aqui</button>
    </div>
  )
}

export default ExemploUseEffect