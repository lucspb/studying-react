import {useState} from 'react'

const Form = () => {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('form enviado =>', value)
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder='preencha o campo' />
        <button type='submit'>enviar</button>
    </form>
  )
}

export default Form