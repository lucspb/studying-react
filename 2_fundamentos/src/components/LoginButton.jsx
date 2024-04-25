

const LoginButton = ({loggedIn, user}) => {
  const handleSair = () => {
    console.log(user, ' saindo...')
  }

  const handleEntrar = () => {
    console.log(user, 'entrando...')
  }


  return (
    <div>{loggedIn ? <button type="submit" onClick={handleSair}> Sair</button> : <button type="submit" onClick={handleEntrar}> Entrar</button>}</div>
  )
}

export default LoginButton