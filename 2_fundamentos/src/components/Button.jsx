import React from 'react'

const Button = () => {
    const handleClick = () => {
        console.log('clicou');


    };


  return (
    <button onClick={handleClick}>clique aqui</button>
  )
}

export default Button