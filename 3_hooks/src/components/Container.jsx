import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container'>
        <h2>teste</h2>
        <div>{children} </div>
        <p>fim do teste</p>
    </div>
  )
}

export default Container