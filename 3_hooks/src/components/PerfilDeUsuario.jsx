import {useState, useEffect} from 'react'

const PerfilDeUsuario = ({usuarioId}) => {
  const [usuario, setUsuario] = useState(null);
  
  
  useEffect(() => {
    
    const buscarUsuario = async() => {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)

        const dadosUsuario = await resposta.json()

        setUsuario(dadosUsuario)
    }

    if(usuarioId) {
        buscarUsuario()
    } 

  }, [usuarioId])

  return (
    <div>
        {usuario ? 
        (<div> 
            <p>Nome do usuário: {usuario.name} </p> 
            <p>Email do usuário: {usuario.email} </p> 
        </div>
        ) : (
        <p>Carregando perfil do usuário</p>
        )}
    </div>
  )
}

export default PerfilDeUsuario