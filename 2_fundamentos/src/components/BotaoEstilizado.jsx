import React from 'react'

const BotaoEstilizado = () => {

    const estiloBotao = {
        backgroundColor: "pink",
        color: "#FFF",
        padding: "15px 32px",
        cursor: "pointer"
    }

  return (
    <button style={estiloBotao}>Clique aqui</button>
  )
}

export default BotaoEstilizado