import {useState, createContext} from 'react'


export const MeuContexto = createContext()

export const MeuContextoProvider = ({children}) => {

    const [mensagem, setMensagem] = useState("início");

    const valorContexto = {
        mensagem,
        setMensagem
    }

    return (
        <MeuContexto.Provider value={valorContexto}>{children}</MeuContexto.Provider>
    )

}