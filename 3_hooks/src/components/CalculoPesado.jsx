import {useState, useMemo} from 'react'

const CalculoPesado = ({ numero }) => {
  const resultCalculoPesado = useMemo(() => {
    return operacaoPesada(numero);
  }, [numero])

  return (
    <div>
        Resultado: {resultCalculoPesado}
    </div>
  )
}

const operacaoPesada = (num) => {
    console.log("realizacao operacao pesada");
    return num * 10000;
}

export default CalculoPesado