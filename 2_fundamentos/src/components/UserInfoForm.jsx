import {useState} from 'react'

const UserInfoForm = () => {
    const [name, setName] = useState("");
    const [idade, setIdade] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(name, idade)

    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="digite o seu nome"></input>
        <br/>
        <input type="number" value={idade} onChange={(event) => setIdade(event.target.value)} placeholder="digite a sua idade"></input>
        <br/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default UserInfoForm